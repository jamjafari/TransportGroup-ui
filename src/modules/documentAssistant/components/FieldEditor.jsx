import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Chip, MenuItem, Stack, TextField, Typography } from '@mui/material';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

import { AppJalaliDatePicker, AppPlateNumberField } from '@/components';

import { fromAssistant, sameEditorValue } from '../utils/fieldValues';

// تقویم داخل دیالوگ شناور باشد (مثل فرم درخواست خودرو)، نه داخل ناحیه‌ی اسکرول
const CALENDAR_IN_DIALOG = { portal: true, zIndex: 1400 };

const NUMERIC_KINDS = new Set(['amount', 'year', 'count']);
const LTR_KINDS = new Set(['identifier', 'vin', 'national_id', 'amount', 'year', 'count']);

// ✅ یک فیلد سند در فرم بازبینی: مقدار پیشنهادی دستیار، قابل اصلاح.
// فیلدی که دستیار درباره‌اش مطمئن نیست (needsReview) تا وقتی کاربر دست نزده با رنگ هشدار
// و متن سؤال نشان داده می‌شود؛ خوانش‌های دیگر (alternatives) با یک کلیک قابل انتخاب‌اند.
const FieldEditor = ({ field, result, question, value, onChange }) => {
  const { t, i18n } = useTranslation();
  const english = i18n.language?.startsWith('en');

  const label = english ? field.labelEn : field.label;
  const proposed = result ? fromAssistant(field.kind, result.value) : null;
  const touched = result && !sameEditorValue(value, proposed);
  const empty = value == null || value === '';
  // هشدار فقط برای مقدار خوانده‌شده‌ی نامطمئن، یا فیلد اجباریِ خالی — نه هر فیلد اختیاری که در سند نبود
  const doubtful = !touched && ((result?.value != null && result.needsReview) || (field.required && empty));

  const hint = doubtful && question ? (english ? question.textEn : question.text) : null;
  const alternatives = (result?.alternatives ?? []).filter((a) => a.value != null);

  const common = {
    fullWidth: true,
    size: 'small',
    label,
    color: doubtful ? 'warning' : undefined,
    focused: doubtful || undefined,
  };

  let input;
  if (field.kind === 'date') {
    input = (
      <AppJalaliDatePicker
        label={label}
        value={value}
        onChange={onChange}
        size="small"
        error={false}
        {...CALENDAR_IN_DIALOG}
      />
    );
  } else if (field.kind === 'plate') {
    // همان ورودی چهارتکه‌ی پلاک فرم خودرو (مقدار «12ب345-67»)
    input = <AppPlateNumberField label={label} value={value ?? ''} onChange={onChange} />;
  } else if (field.kind === 'enum') {
    input = (
      <TextField {...common} select value={value ?? ''} onChange={(e) => onChange(e.target.value)}>
        <MenuItem value="">
          <em>{t('—')}</em>
        </MenuItem>
        {(field.options ?? []).map((o) => (
          <MenuItem key={o.value} value={o.value}>
            {english ? o.labelEn : o.label}
          </MenuItem>
        ))}
      </TextField>
    );
  } else {
    input = (
      <TextField
        {...common}
        value={value ?? ''}
        onChange={(e) => onChange(e.target.value)}
        slotProps={{
          htmlInput: {
            inputMode: NUMERIC_KINDS.has(field.kind) ? 'numeric' : undefined,
            dir: LTR_KINDS.has(field.kind) ? 'ltr' : undefined,
          },
        }}
      />
    );
  }

  return (
    <Box
      sx={{
        p: 1,
        borderRadius: 1,
        border: '1px solid',
        borderColor: doubtful ? 'warning.main' : 'transparent',
        bgcolor: doubtful ? 'action.hover' : undefined,
      }}
    >
      {input}

      {(hint || result?.source === 'cloud' || alternatives.length > 0) && (
        <Stack direction="row" spacing={0.75} useFlexGap flexWrap="wrap" alignItems="center" sx={{ mt: 0.75 }}>
          {hint && (
            <Typography variant="meta" color="warning.dark" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <HelpOutlineIcon fontSize="inherit" />
              {hint}
            </Typography>
          )}
          {result?.source === 'cloud' && !touched && (
            <Chip size="small" variant="outlined" icon={<CloudOutlinedIcon />} label={t('خوانش ابری')} />
          )}
          {alternatives.map((a) => (
            <Chip
              key={String(a.display)}
              size="small"
              clickable
              onClick={() => onChange(fromAssistant(field.kind, a.value))}
              label={t('یا: {{value}}', { value: a.display })}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default memo(FieldEditor);
