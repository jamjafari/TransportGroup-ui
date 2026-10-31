import React, { memo, useEffect, useState } from 'react';

import { Alert, Grid, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  AppAutocompleteform,
  AppButton,
  AppJalaliDatePicker,
  AppTextField,
  AppTimePicker,
} from '@/components';
import { hasErrors, required, validate } from '@/validation';
import { formatNumber } from '@/utils';

import * as vehicleRequestApi from '../api/vehicleRequestApi';
import { toApiTime } from '../constants';

// ✅ تقویم داخل دیالوگ: بدون portal، تقویم داخل ناحیه‌ی اسکرول DialogContent باز می‌شد،
// محتوا را هل می‌داد و دیالوگ را اسکرول‌دار می‌کرد. با portal روی صفحه شناور می‌شود؛
// zIndex باید از Dialog در MUI (1300) بالاتر باشد وگرنه پشت دیالوگ می‌رود.
const CALENDAR_IN_DIALOG = { portal: true, zIndex: 1400 };

const emptyValues = {
  origin: null,
  destination: null,
  subject: '',
  departureDate: null,
  departureTime: '',
  returnDate: null,
  returnTime: '',
  description: '',
};

const schema = {
  origin: [required('انتخاب مبدأ الزامی است.')],
  destination: [
    required('انتخاب مقصد الزامی است.'),
    (value, values) =>
      value && values.origin && value.id === values.origin.id
        ? 'مبدأ و مقصد نمی‌توانند یکسان باشند.'
        : null,
  ],
  subject: [required('موضوع درخواست الزامی است')],
  departureDate: [required('تاریخ رفت الزامی است')],
  returnDate: [
    (value, values) =>
      value && values.departureDate && value < values.departureDate
        ? 'تاریخ برگشت نمی‌تواند قبل از تاریخ رفت باشد.'
        : null,
  ],
};

const NewVehicleRequestForm = ({ onCreated }) => {
  const { t } = useTranslation();

  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [locations, setLocations] = useState([]);
  const [availabilityResult, setAvailabilityResult] = useState({ key: null, data: null });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const set = (field, value) => setValues((prev) => ({ ...prev, [field]: value }));

  useEffect(() => {
    vehicleRequestApi.getLocations().then((response) => {
      if (response.success) setLocations(response.data ?? []);
    });
  }, []);

  // ✅ ظرفیت آزاد همان لحظه که بازه‌ی تاریخ مشخص شد بررسی می‌شود.
  // نتیجه همراه کلید بازه‌اش ذخیره می‌شود؛ «در حال بررسی» و «نتیجه» از مقایسه‌ی کلید به دست می‌آیند
  // (به‌جای setState همزمان داخل effect).
  const availabilityKey = values.departureDate
    ? `${values.departureDate.toISOString()}|${values.returnDate?.toISOString() ?? ''}`
    : null;

  useEffect(() => {
    if (!availabilityKey) return undefined;

    let cancelled = false;
    const [from, to] = availabilityKey.split('|');

    vehicleRequestApi.getAvailability(from, to || null).then((response) => {
      if (!cancelled) {
        setAvailabilityResult({ key: availabilityKey, data: response.success ? response.data : null });
      }
    });

    return () => {
      cancelled = true;
    };
  }, [availabilityKey]);

  const checking = !!availabilityKey && availabilityResult.key !== availabilityKey;
  const availability = !checking && availabilityKey ? availabilityResult.data : null;
  const unavailable = availability && !availability.isAvailable;

  const handleSubmit = async () => {
    const validationErrors = validate(schema, values);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    setSubmitting(true);
    setSubmitError('');

    const response = await vehicleRequestApi.createRequest({
      originLocationId: values.origin.id,
      destinationLocationId: values.destination.id,
      subject: values.subject,
      description: values.description || null,
      departureDate: values.departureDate,
      departureTime: toApiTime(values.departureTime),
      returnDate: values.returnDate,
      returnTime: toApiTime(values.returnTime),
    });

    setSubmitting(false);

    if (!response.success) {
      setSubmitError(response.errors?.filter(Boolean).join(' — ') || t('خطا در ثبت درخواست'));
      return;
    }

    setValues(emptyValues);
    setErrors({});
    onCreated?.();
  };

  const locationField = (field, label) => (
    <AppAutocompleteform
      required
      label={label}
      name={field}
      options={locations}
      value={values[field]}
      getOptionLabel={(option) => option?.title ?? ''}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      onChange={(_, value) => set(field, value)}
      error={!!errors[field]}
      helperText={errors[field]}
    />
  );

  return (
    <Stack spacing={2} sx={{ pt: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>{locationField('origin', 'مبدا')}</Grid>
        <Grid size={{ xs: 12, md: 6 }}>{locationField('destination', 'مقصد')}</Grid>

        <Grid size={12}>
          <AppTextField
            required
            label="موضوع"
            name="subject"
            value={values.subject}
            onChange={(event) => set('subject', event.target.value)}
            error={!!errors.subject}
            helperText={errors.subject}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ رفت"
            name="departureDate"
            {...CALENDAR_IN_DIALOG}
            value={values.departureDate}
            onChange={(value) => set('departureDate', value)}
            error={!!errors.departureDate}
            helperText={errors.departureDate}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTimePicker
            fullWidth
            label="ساعت رفت"
            name="departureTime"
            value={values.departureTime}
            onChange={(event) => set('departureTime', event.target.value)}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            label="تاریخ برگشت"
            name="returnDate"
            {...CALENDAR_IN_DIALOG}
            value={values.returnDate}
            onChange={(value) => set('returnDate', value)}
            error={!!errors.returnDate}
            helperText={errors.returnDate}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTimePicker
            fullWidth
            label="ساعت برگشت"
            name="returnTime"
            value={values.returnTime}
            onChange={(event) => set('returnTime', event.target.value)}
          />
        </Grid>

        <Grid size={12}>
          <AppTextField
            multiline
            minRows={2}
            label="توضیحات"
            name="description"
            value={values.description}
            onChange={(event) => set('description', event.target.value)}
          />
        </Grid>
      </Grid>

      {availability && !checking && (
        <Alert severity={unavailable ? 'warning' : 'success'}>
          {unavailable
            ? t('در این بازه هیچ خودرو یا راننده‌ی آزادی وجود ندارد؛ لطفاً تاریخ دیگری انتخاب کنید.')
            : t('در این بازه {{vehicles}} خودرو و {{drivers}} راننده آزاد است.', {
                vehicles: formatNumber(availability.availableVehicles),
                drivers: formatNumber(availability.availableDrivers),
              })}
        </Alert>
      )}

      {submitError && <Alert severity="error">{submitError}</Alert>}

      <Stack direction="row" justifyContent="flex-end">
        <AppButton
          variant="contained"
          loading={submitting}
          disabled={checking || unavailable}
          onClick={handleSubmit}
          labelKey="ثبت درخواست"
        />
      </Stack>
    </Stack>
  );
};

export default memo(NewVehicleRequestForm);
