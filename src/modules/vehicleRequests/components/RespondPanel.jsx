import React, { memo, useEffect, useState } from 'react';

import { Alert, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { AppAutocompleteform, AppButton, AppTextField } from '@/components';

import * as vehicleRequestApi from '../api/vehicleRequestApi';

// ✅ پاسخ مدیر نقلیه: تأیید (انتخاب خودرو و راننده‌ی آزاد در بازه‌ی درخواست) یا رد (با دلیل)
const RespondPanel = ({ request, mode, onDone, onCancel }) => {
  const { t } = useTranslation();

  const [resources, setResources] = useState({ vehicles: [], drivers: [] });
  const [loading, setLoading] = useState(mode === 'approve');
  const [vehicle, setVehicle] = useState(null);
  const [driver, setDriver] = useState(null);
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    if (mode !== 'approve') return;
    vehicleRequestApi
      .getResources(request.id)
      .then((response) => {
        if (response.success) setResources(response.data);
      })
      .finally(() => setLoading(false));
  }, [mode, request.id]);

  const noResources =
    mode === 'approve' && !loading && (!resources.vehicles.length || !resources.drivers.length);

  const handleConfirm = async () => {
    const nextErrors = {};
    if (mode === 'approve') {
      if (!vehicle) nextErrors.vehicle = t('انتخاب خودرو الزامی است');
      if (!driver) nextErrors.driver = t('انتخاب راننده الزامی است');
    } else if (!note.trim()) {
      nextErrors.note = t('دلیل رد درخواست را بنویسید.');
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setSubmitting(true);
    setSubmitError('');

    const response =
      mode === 'approve'
        ? await vehicleRequestApi.approveRequest(request.id, {
            vehicleId: vehicle.id,
            driverId: driver.id,
            note: note || null,
          })
        : await vehicleRequestApi.rejectRequest(request.id, { note });

    setSubmitting(false);

    if (!response.success) {
      setSubmitError(response.errors?.filter(Boolean).join(' — ') || t('ذخیره انجام نشد'));
      return;
    }

    onDone?.();
  };

  const lookupField = (label, options, value, setValue, error) => (
    <AppAutocompleteform
      required
      label={label}
      options={options}
      value={value}
      loading={loading}
      getOptionLabel={(option) => option?.title ?? ''}
      isOptionEqualToValue={(option, other) => option?.id === other?.id}
      onChange={(_, selected) => setValue(selected)}
      error={!!error}
      helperText={error}
    />
  );

  return (
    <Stack spacing={1.5} sx={{ mt: 1.5 }}>
      {mode === 'approve' && (
        <>
          {lookupField('خودرو', resources.vehicles, vehicle, setVehicle, errors.vehicle)}
          {lookupField('راننده', resources.drivers, driver, setDriver, errors.driver)}
          {noResources && (
            <Alert severity="warning">
              {t('در بازه‌ی این درخواست خودرو یا راننده‌ی آزادی وجود ندارد.')}
            </Alert>
          )}
        </>
      )}

      <AppTextField
        multiline
        minRows={2}
        required={mode === 'reject'}
        label={mode === 'reject' ? 'دلیل رد' : 'توضیح (اختیاری)'}
        value={note}
        onChange={(event) => setNote(event.target.value)}
        error={!!errors.note}
        helperText={errors.note}
      />

      {submitError && <Alert severity="error">{submitError}</Alert>}

      <Stack direction="row" spacing={1} justifyContent="flex-end">
        <AppButton variant="outlined" size="medium" onClick={onCancel} labelKey="انصراف" />
        <AppButton
          variant="contained"
          size="medium"
          color={mode === 'approve' ? 'success' : 'error'}
          loading={submitting}
          disabled={noResources}
          onClick={handleConfirm}
          labelKey={mode === 'approve' ? 'تأیید و ساخت مأموریت' : 'رد درخواست'}
        />
      </Stack>
    </Stack>
  );
};

export default memo(RespondPanel);
