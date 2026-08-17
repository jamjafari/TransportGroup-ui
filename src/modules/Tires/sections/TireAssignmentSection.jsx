import React, { memo, useEffect, useState } from 'react';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppTextField,
  AppButton,
} from '@/components';

import { validate, hasErrors } from '@/validation';

import useTire from '../hooks/useTire';
import useTireAssignments from '../hooks/useTireAssignments';
import { tirePositionOptions } from '../constants';

const assignmentSchema = {};

const emptyDraft = {
  tireId: '',
  position: '',
  installKM: '',
  installDate: null,
};

const TireAssignmentSection = ({ vehicleId }) => {
  const { tires, getTires } = useTire();
  const { assignments, loadAssignments, createAssignment, unassign } =
    useTireAssignments();

  const [draft, setDraft] = useState(emptyDraft);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    getTires({ onlyAvailable: true });
  }, [getTires]);

  useEffect(() => {
    if (vehicleId) loadAssignments(vehicleId);
  }, [vehicleId, loadAssignments]);

  const tireOptions = tires.map((t) => ({
    value: t.id,
    label: `${t.brand} ${t.model} — ${t.serialNumber}`,
  }));

  const positionLabel = (value) =>
    tirePositionOptions.find((o) => o.value === value)?.label ?? value;

  const handleFieldChange = (field) => (event) => {
    setDraft((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleAssign = async () => {
    const validationErrors = validate(
      {
        tireId: [(v) => (v ? null : 'انتخاب لاستیک الزامی است')],
        position: [(v) => (v ? null : 'موقعیت نصب را انتخاب کنید')],
        installKM: [
          (v) => (v !== '' && v != null ? null : 'کارکرد نصب الزامی است'),
        ],
        installDate: [(v) => (v ? null : 'تاریخ نصب الزامی است')],
      },
      draft,
    );

    setErrors(validationErrors);

    if (hasErrors(validationErrors)) return;

    setSubmitting(true);

    try {
      await createAssignment({ ...draft, vehicleId });
      setDraft(emptyDraft);
      setErrors({});
      await getTires({ onlyAvailable: true });
      await loadAssignments(vehicleId);
    } finally {
      setSubmitting(false);
    }
  };

  const handleUnassign = async (assignmentId) => {
    const removeKM = window.prompt(
      'کارکرد فعلی خودرو در لحظه‌ی خارج کردن (کیلومتر):',
    );
    if (removeKM === null) return;

    await unassign(assignmentId, {
      removeKM: Number(removeKM),
      removeDate: new Date(),
    });

    await getTires({ onlyAvailable: true });
    await loadAssignments(vehicleId);
  };

  const currentAssignments = assignments.filter((a) => a.isCurrent);
  const historyAssignments = assignments.filter((a) => !a.isCurrent);

  return (
    <AppFormSection title="لاستیک‌های خودرو" divider>
      <Grid container spacing={2} alignItems="flex-end">
        <Grid size={{ xs: 12, md: 4 }}>
          <AppSelectform
            fullWidth
            label="لاستیک"
            name="tireId"
            value={draft.tireId}
            options={tireOptions}
            onChange={(value) =>
              setDraft((prev) => ({ ...prev, tireId: value }))
            }
            error={!!errors.tireId}
            helperText={errors.tireId}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <AppSelectform
            fullWidth
            label="موقعیت نصب"
            name="position"
            value={draft.position}
            options={tirePositionOptions}
            onChange={(value) =>
              setDraft((prev) => ({ ...prev, position: value }))
            }
            error={!!errors.position}
            helperText={errors.position}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 2 }}>
          <AppTextField
            fullWidth
            type="number"
            label="کارکرد نصب (KM)"
            value={draft.installKM}
            onChange={handleFieldChange('installKM')}
            error={!!errors.installKM}
            helperText={errors.installKM}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          <AppJalaliDatePicker
            label="تاریخ نصب"
            value={draft.installDate}
            onChange={(value) =>
              setDraft((prev) => ({ ...prev, installDate: value }))
            }
            error={!!errors.installDate}
            helperText={errors.installDate}
          />
        </Grid>
      </Grid>

      <Box mt={2}>
        <AppButton onClick={handleAssign} disabled={submitting}>
          تخصیص لاستیک
        </AppButton>
      </Box>

      <Box mt={3}>
        <Typography variant="subtitle2" mb={1}>
          لاستیک‌های نصب‌شده
        </Typography>

        <List>
          {currentAssignments.map((a) => (
            <ListItem
              key={a.id}
              secondaryAction={
                <AppButton
                  size="small"
                  color="warning"
                  onClick={() => handleUnassign(a.id)}
                >
                  خارج کردن
                </AppButton>
              }
            >
              <ListItemText
                primary={`${a.tireBrand} — ${a.tireSerialNumber} (${positionLabel(a.position)})`}
                secondary={`نصب در KM ${a.installKM}`}
              />
            </ListItem>
          ))}

          {currentAssignments.length === 0 && (
            <Typography variant="body2" color="text.secondary">
              لاستیکی روی این خودرو نصب نیست.
            </Typography>
          )}
        </List>

        {historyAssignments.length > 0 && (
          <>
            <Typography variant="subtitle2" mt={2} mb={1}>
              تاریخچه
            </Typography>

            <List>
              {historyAssignments.map((a) => (
                <ListItem key={a.id}>
                  <ListItemText
                    primary={`${a.tireBrand} — ${a.tireSerialNumber} (${positionLabel(a.position)})`}
                    secondary={`از KM ${a.installKM} تا KM ${a.removeKM} — خارج شده`}
                  />
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Box>
    </AppFormSection>
  );
};

export default memo(TireAssignmentSection);
