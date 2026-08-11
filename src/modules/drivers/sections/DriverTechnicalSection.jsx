import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppTextField,
  AppJalaliDatePicker,
  AppSwitch,
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
            requiredl
            label="شماره پرسنلی "
            name="personnelCode"
            value={values.personnelCode}
            onChange={onChange}
            error={!!errors?.personnelCode}
            helperText={errors?.personnelCode}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="شماره گواهی نامه "
            name="licenseNumber"
            value={values.licenseNumber}
            onChange={onChange}
            error={!!errors?.licenseNumber}
            helperText={errors?.licenseNumber}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ انقضاء"
            name="licenseExpireDate"
            value={values.licenseExpireDate}
            onChange={(value) => setFieldValue('licenseExpireDate', value)}
            error={!!errors?.licenseExpireDate}
            helperText={errors?.licenseExpireDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSwitch
            label="راننده فعال است"
            name="isActive"
            checked={values.isActive}
            onChange={(event) =>
              setFieldValue('isActive', event.target.checked)
            }
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(DriverTechnicalSection);
