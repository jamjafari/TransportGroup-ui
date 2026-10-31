import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import {
  Alert,
  Autocomplete,
  Box,
  Button,
  Checkbox,
  Chip,
  CircularProgress,
  FormControlLabel,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

import { AppDialog } from '@/components';
import { useAuth } from '@/hooks';
import * as attachmentApi from '@/api/attachmentApi';
import { validateAttachmentFile } from '@/constants/attachmentTypes';
import { getVehicleById, updateVehicle } from '@/modules/fleet/vehicles/api/vehicleApi';

import * as assistantApi from '../api/documentAssistantApi';
import {
  VEHICLE_DOCUMENT_TYPES,
  VEHICLE_UPDATE_FIELDS,
  canUseSection,
  sectionsFor,
  squash,
  toVehicleValue,
} from '../constants/sections';
import { attachmentDates, fromAssistant, matchValues, toFeedback } from '../utils/fieldValues';

import FieldEditor from './FieldEditor';

// فقط تصویر و PDF خوانده می‌شوند
const READABLE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp', '.pdf'];

const initialState = {
  step: 'pick', // pick | reading | review | saving | done
  file: null,
  error: null,
  result: null,
  docType: '',
  values: {},
  sectionKey: null,
  records: [],
  recordsLoading: false,
  recordId: null, // انتخاب صریح کاربر؛ null ⇐ رکورد پیشنهادی دستیار
  skipVehicleFields: [],
  saveError: null,
  saved: null,
};

// مقدارهای اولیه‌ی فرم برای یک نوع سند: از خوانش دستیار اگر همان نوع باشد، وگرنه مقدارهای فعلی
const valuesFor = (def, result, previous = {}) => {
  const readFields = result?.documentType?.value === def?.key ? result.fields : [];
  const byKey = Object.fromEntries(readFields.map((f) => [f.key, f]));
  return Object.fromEntries(
    (def?.fields ?? []).map((f) => [
      f.key,
      byKey[f.key] ? fromAssistant(f.kind, byKey[f.key].value) : previous[f.key] ?? (f.kind === 'date' ? null : ''),
    ]),
  );
};

// ✅ «دستیار هوش مصنوعی»: هر سندی را می‌گیرد، نوع و بخش مربوطش را تشخیص می‌دهد، مقادیرش را برای بازبینی
// پیشنهاد می‌کند و پس از تأیید، آن را به رکورد درست (با پیشنهاد خودکار رکورد) پیوست می‌کند.
// برای کارت و سند خودرو، مشخصات خودرو هم (با تأیید کاربر) به‌روز می‌شود.
const DocumentAssistantDialog = ({ open, onClose }) => {
  const { t, i18n } = useTranslation();
  const english = i18n.language?.startsWith('en');
  const navigate = useNavigate();
  const { can } = useAuth();

  const [state, setState] = useState(initialState);
  const [typeDefs, setTypeDefs] = useState(null);
  const patch = useCallback((changes) => setState((s) => ({ ...s, ...changes })), []);

  const { step, file, result, docType, values, records, sectionKey } = state;

  // پیش‌نمایش فایل کنار فرم (برای مقایسه‌ی مقادیر با خودِ سند)
  const previewUrl = useMemo(() => (file ? URL.createObjectURL(file) : null), [file]);
  useEffect(() => () => previewUrl && URL.revokeObjectURL(previewUrl), [previewUrl]);

  const def = typeDefs?.find((d) => d.key === docType);
  const sections = useMemo(
    () => sectionsFor(docType, values).filter((s) => canUseSection(can, s)),
    [docType, values, can],
  );
  const allSectionsForType = sectionsFor(docType, values);
  const section = useMemo(
    () => sections.find((s) => s.key === sectionKey) ?? sections[0] ?? null,
    [sections, sectionKey],
  );

  // ---------------------------------------------------------------- رکوردها

  const loadRecords = useCallback(
    async (nextSection) => {
      if (!nextSection) {
        patch({ records: [], sectionKey: null });
        return;
      }
      patch({ sectionKey: nextSection.key, records: [], recordsLoading: true, recordId: null });
      const response = await nextSection.load();
      patch({ records: response.success && Array.isArray(response.data) ? response.data : [], recordsLoading: false });
    },
    [patch],
  );

  const matchInput = useMemo(() => matchValues(values), [values]);
  // رکوردی که با مقادیر سند جور است (پلاک، کد ملی، شماره فاکتور، …) و دلیلش
  const suggestion = useMemo(() => {
    const record = section ? records.find((r) => section.match(r, matchInput)) : null;
    return record ? { record, reason: section.match(record, matchInput) } : null;
  }, [section, records, matchInput]);

  const orderedRecords = useMemo(
    () => (section?.sort ? section.sort(records, matchInput) : records),
    [section, records, matchInput],
  );
  const selectedRecord =
    state.records.find((r) => r.id === state.recordId) ?? (state.recordId == null ? suggestion?.record : null) ?? null;

  // ---------------------------------------------------------------- خواندن

  const reset = useCallback(() => setState(initialState), []);

  const handleClose = useCallback(() => {
    reset();
    onClose?.();
  }, [reset, onClose]);

  const handleFile = useCallback(
    async (picked) => {
      if (!picked) return;
      const invalid = validateAttachmentFile(picked, READABLE_EXTENSIONS);
      if (invalid) {
        patch({ error: invalid });
        return;
      }

      patch({ ...initialState, file: picked, step: 'reading' });

      const [analysis, types] = await Promise.all([
        assistantApi.analyzeDocument(picked),
        typeDefs ? Promise.resolve({ success: true, data: typeDefs }) : assistantApi.getDocumentTypes(),
      ]);

      if (!analysis.success || !types.success) {
        const message = (analysis.success ? types : analysis).errors?.[0];
        patch({ step: 'pick', error: message || t('خواندن سند انجام نشد. دوباره تلاش کنید.') });
        return;
      }

      setTypeDefs(types.data);
      const type = analysis.data.documentType?.value;
      const typeDef = types.data.find((d) => d.key === type);
      const nextValues = valuesFor(typeDef, analysis.data);
      patch({ step: 'review', result: analysis.data, docType: typeDef ? type : '', values: nextValues });

      const first = sectionsFor(type, nextValues).find((s) => canUseSection(can, s));
      loadRecords(first);
    },
    [patch, typeDefs, t, can, loadRecords],
  );

  const changeType = useCallback(
    (type) => {
      const typeDef = typeDefs?.find((d) => d.key === type);
      const nextValues = valuesFor(typeDef, result, values);
      patch({ docType: type, values: nextValues, skipVehicleFields: [] });
      loadRecords(sectionsFor(type, nextValues).find((s) => canUseSection(can, s)));
    },
    [typeDefs, result, values, patch, loadRecords, can],
  );

  const setValue = useCallback(
    (key, value) => setState((s) => ({ ...s, values: { ...s.values, [key]: value } })),
    [],
  );

  // ---------------------------------------------------------------- مشخصات خودرو

  const vehicleChanges = useMemo(() => {
    if (!VEHICLE_DOCUMENT_TYPES.includes(docType) || !selectedRecord || section?.key !== 'vehicles') return [];
    return VEHICLE_UPDATE_FIELDS.map((f) => {
      const field = def?.fields.find((x) => x.key === f.key);
      const next = field ? toVehicleValue(f.key, toFeedback(field.kind, values[f.key])) : null;
      const current = selectedRecord[f.vehicleField];
      if (next == null || squash(next) === squash(current)) return null;
      const shown = field?.kind === 'enum' ? field.options?.find((o) => o.value === values[f.key]) : null;
      return {
        ...f,
        next,
        nextLabel: shown ? (english ? shown.labelEn : shown.label) : String(values[f.key]),
        current,
      };
    }).filter(Boolean);
  }, [docType, selectedRecord, section, def, values, english]);

  // ---------------------------------------------------------------- ثبت

  const handleSave = useCallback(async () => {
    if (!section || !selectedRecord || !def) return;
    patch({ step: 'saving', saveError: null });

    try {
      await attachmentApi.uploadAttachment({
        ownerType: section.ownerType,
        ownerId: selectedRecord.id,
        category: section.category,
        ...attachmentDates(values),
        file,
      });
    } catch (error) {
      patch({ step: 'review', saveError: error.response?.data?.message || t('ثبت سند انجام نشد.') });
      return;
    }

    // مشخصات خودرو (فقط موارد تیک‌خورده)
    const applied = vehicleChanges.filter((c) => !state.skipVehicleFields.includes(c.key));
    let vehicleResult = null;
    if (applied.length) {
      const current = await getVehicleById(selectedRecord.id);
      const update = current.success
        ? await updateVehicle(selectedRecord.id, {
            ...current.data,
            ...Object.fromEntries(applied.map((c) => [c.vehicleField, c.next])),
          })
        : current;
      vehicleResult = update.success ? 'updated' : update.errors?.[0] || t('مشخصات خودرو به‌روز نشد.');
    }

    // بازخورد برای یادگیری دستیار (اگر نرسد، سند ثبت شده و مشکلی نیست)
    if (result?.analysisId) {
      const unit = values.currency || result.fields?.find((f) => f.kind === 'amount' && f.value?.unit)?.value.unit;
      await assistantApi.sendFeedback({
        analysisId: result.analysisId,
        documentType: docType,
        fields: Object.fromEntries(def.fields.map((f) => [f.key, toFeedback(f.kind, values[f.key], unit)])),
      });
    }

    patch({ step: 'done', saved: { section, record: selectedRecord, vehicleResult } });
  }, [section, selectedRecord, def, values, file, vehicleChanges, state.skipVehicleFields, result, docType, patch, t]);

  // ---------------------------------------------------------------- نمایش

  const notices = (result?.questions ?? []).filter((q) => ['documentQuality', 'documentSide'].includes(q.field));
  const questionFor = (key) => result?.questions?.find((q) => q.field === key);
  const resultField = (key) => (result?.documentType?.value === docType ? result.fields.find((f) => f.key === key) : null);
  const typeLabel = (d) => (english ? d.labelEn : d.label);

  const renderPick = () => (
    <Stack spacing={2} alignItems="center" sx={{ py: 4, textAlign: 'center' }}>
      <AutoAwesomeIcon color="primary" sx={{ fontSize: 48 }} />
      <Typography variant="sectionTitle">{t('سند را به دستیار بدهید')}</Typography>
      <Typography variant="bodyText" color="text.secondary" sx={{ maxWidth: 520 }}>
        {t(
          'گواهینامه، کارت یا سند خودرو، بیمه‌نامه، برگ معاینه فنی یا فاکتور؛ دستیار نوع سند و بخش مربوطش را تشخیص می‌دهد و اطلاعاتش را برای بررسی شما پیشنهاد می‌کند.',
        )}
      </Typography>
      <Button variant="contained" component="label" startIcon={<UploadFileIcon />} size="large">
        {t('انتخاب فایل')}
        <input
          hidden
          type="file"
          accept={READABLE_EXTENSIONS.join(',')}
          onChange={(e) => {
            handleFile(e.target.files?.[0]);
            e.target.value = '';
          }}
        />
      </Button>
      <Typography variant="meta" color="text.secondary">
        {t('تصویر (JPG، PNG، WebP) یا PDF')}
      </Typography>
      {state.error && <Alert severity="error">{state.error}</Alert>}
    </Stack>
  );

  const renderReading = () => (
    <Stack spacing={2} alignItems="center" sx={{ py: 6, textAlign: 'center' }}>
      <CircularProgress />
      <Typography variant="bodyText">{t('دستیار در حال خواندن سند است…')}</Typography>
      <Typography variant="meta" color="text.secondary">
        {t('ممکن است تا یک دقیقه طول بکشد.')}
      </Typography>
    </Stack>
  );

  const renderPreview = () =>
    file?.type === 'application/pdf' ? (
      <Box component="iframe" src={previewUrl} title={file.name} sx={{ width: '100%', height: 520, border: 0 }} />
    ) : (
      <Box
        component="img"
        src={previewUrl}
        alt={file?.name}
        sx={{ width: '100%', maxHeight: 520, objectFit: 'contain', borderRadius: 1, bgcolor: 'action.hover' }}
      />
    );

  const renderReview = () => (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 5 }}>
        <Box sx={{ position: { md: 'sticky' }, top: 0 }}>{renderPreview()}</Box>
      </Grid>

      <Grid size={{ xs: 12, md: 7 }}>
        <Stack spacing={2}>
          {notices.map((q) => (
            <Alert key={q.field} severity="warning">
              {english ? q.textEn : q.text}
            </Alert>
          ))}

          <Stack direction="row" spacing={1} alignItems="center" useFlexGap flexWrap="wrap">
            <TextField
              select
              size="small"
              label={t('نوع سند')}
              value={docType}
              onChange={(e) => changeType(e.target.value)}
              color={result?.documentType?.needsReview || !docType ? 'warning' : undefined}
              focused={result?.documentType?.needsReview || !docType || undefined}
              sx={{ minWidth: 240 }}
            >
              {(typeDefs ?? []).map((d) => (
                <MenuItem key={d.key} value={d.key}>
                  {typeLabel(d)}
                </MenuItem>
              ))}
            </TextField>
            {result?.cloud?.used && (
              <Chip size="small" variant="outlined" icon={<CloudOutlinedIcon />} label={t('خوانش ابری')} />
            )}
          </Stack>

          {!docType && (
            <Alert severity="info">{t('دستیار نوع این سند را تشخیص نداد؛ لطفاً نوع آن را انتخاب کنید.')}</Alert>
          )}

          {def && (
            <Grid container spacing={1}>
              {def.fields.map((f) => (
                <Grid key={f.key} size={{ xs: 12, sm: 6 }}>
                  <FieldEditor
                    field={f}
                    result={resultField(f.key)}
                    question={questionFor(f.key)}
                    value={values[f.key]}
                    onChange={(v) => setValue(f.key, v)}
                  />
                </Grid>
              ))}
            </Grid>
          )}

          {docType && renderFiling()}

          {state.saveError && <Alert severity="error">{state.saveError}</Alert>}
        </Stack>
      </Grid>
    </Grid>
  );

  const renderFiling = () => {
    if (!allSectionsForType.length) return null;
    if (!sections.length)
      return <Alert severity="warning">{t('شما اجازه‌ی ثبت سند در بخش مربوط به این سند را ندارید.')}</Alert>;

    return (
      <Stack spacing={1.5} sx={{ pt: 1, borderTop: '1px solid', borderColor: 'divider' }}>
        <Typography variant="cardTitle">{t('ثبت در برنامه')}</Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1}>
          <TextField
            select
            size="small"
            label={t('بخش')}
            value={section?.key ?? ''}
            onChange={(e) => loadRecords(sections.find((s) => s.key === e.target.value))}
            sx={{ minWidth: 200 }}
            disabled={sections.length < 2}
          >
            {sections.map((s) => (
              <MenuItem key={s.key} value={s.key}>
                {t(s.label)}
              </MenuItem>
            ))}
          </TextField>

          <Autocomplete
            fullWidth
            size="small"
            loading={state.recordsLoading}
            options={orderedRecords}
            value={selectedRecord}
            onChange={(_, record) => patch({ recordId: record?.id ?? -1 })}
            getOptionLabel={(r) => section?.recordLabel(r) || `#${r.id}`}
            isOptionEqualToValue={(a, b) => a.id === b.id}
            renderInput={(params) => (
              <TextField
                {...params}
                label={t('رکورد')}
                helperText={
                  suggestion && selectedRecord?.id === suggestion.record.id
                    ? t('پیشنهاد دستیار بر اساس {{reason}}', { reason: t(suggestion.reason) })
                    : undefined
                }
              />
            )}
          />
        </Stack>

        {vehicleChanges.length > 0 && (
          <Box>
            <Typography variant="meta" color="text.secondary">
              {t('به‌روزرسانی مشخصات خودرو از روی این سند:')}
            </Typography>
            {vehicleChanges.map((c) => (
              <FormControlLabel
                key={c.key}
                sx={{ display: 'flex' }}
                control={
                  <Checkbox
                    size="small"
                    checked={!state.skipVehicleFields.includes(c.key)}
                    onChange={(e) =>
                      patch({
                        skipVehicleFields: e.target.checked
                          ? state.skipVehicleFields.filter((k) => k !== c.key)
                          : [...state.skipVehicleFields, c.key],
                      })
                    }
                  />
                }
                label={t('{{field}}: {{from}} ← {{to}}', {
                  field: t(c.label),
                  from: c.current || '—',
                  to: c.nextLabel,
                })}
              />
            ))}
          </Box>
        )}
      </Stack>
    );
  };

  const renderDone = () => {
    const { saved } = state;
    return (
      <Stack spacing={2} sx={{ py: 2 }}>
        <Alert severity="success">
          {t('سند در «{{section}}» برای «{{record}}» ثبت شد.', {
            section: t(saved.section.label),
            record: saved.section.recordLabel(saved.record),
          })}
        </Alert>
        {saved.vehicleResult === 'updated' && <Alert severity="success">{t('مشخصات خودرو به‌روز شد.')}</Alert>}
        {saved.vehicleResult && saved.vehicleResult !== 'updated' && (
          <Alert severity="warning">{saved.vehicleResult}</Alert>
        )}
      </Stack>
    );
  };

  const actions = {
    review: (
      <>
        <Button onClick={reset}>{t('سند دیگر')}</Button>
        <Button variant="contained" onClick={handleSave} disabled={!def || !section || !selectedRecord}>
          {t('تأیید و ثبت سند')}
        </Button>
      </>
    ),
    saving: (
      <Button variant="contained" disabled startIcon={<CircularProgress size={16} />}>
        {t('در حال ثبت…')}
      </Button>
    ),
    done: state.saved && (
      <>
        <Button
          onClick={() => {
            const path = state.saved.section.editPath(state.saved.record.id);
            handleClose();
            navigate(path);
          }}
        >
          {t('مشاهده رکورد')}
        </Button>
        <Button onClick={reset}>{t('سند دیگر')}</Button>
        <Button variant="contained" onClick={handleClose}>
          {t('بستن')}
        </Button>
      </>
    ),
  }[step];

  return (
    <AppDialog
      open={open}
      onClose={step === 'reading' || step === 'saving' ? undefined : handleClose}
      title="دستیار هوش مصنوعی"
      maxWidth={step === 'review' || step === 'saving' ? 'lg' : 'sm'}
      actions={actions}
    >
      {step === 'pick' && renderPick()}
      {step === 'reading' && renderReading()}
      {(step === 'review' || step === 'saving') && renderReview()}
      {step === 'done' && renderDone()}
    </AppDialog>
  );
};

export default memo(DocumentAssistantDialog);
