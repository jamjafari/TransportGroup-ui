import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppTextField,
  AppJalaliDatePicker,
} from '@/components';

const DriverTechnicalSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
}) => {
  return (
    <AppFormSection title="اطلاعات فنی راننده">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="شماره پرسنلی "
            name="PerssonelCode"
            value={values.PerssonelCode}
            onChange={onChange}
            error={!!errors?.PerssonelCode}
            helperText={errors?.PerssonelCode}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="شماره گواهی نامه "
            name="LicenseNumber"
            value={values.LicenseNumber}
            onChange={onChange}
            error={!!errors?.LicenseNumber}
            helperText={errors?.LicenseNumber}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ انقضاء"
            name="LicenseExpireDate"
            value={values.LicenseExpireDate}
            onChange={(value) => setFieldValue('LicenseExpireDate', value)}
            error={!!errors?.LicenseExpireDate}
            helperText={errors?.LicenseExpireDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"
            label="  وضعیت راننده"
            name="IsActive"
            value={values.IsActive}
            onChange={onChange}
            error={!!errors?.IsActive}
            helperText={errors?.IsActive}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(DriverTechnicalSection);
