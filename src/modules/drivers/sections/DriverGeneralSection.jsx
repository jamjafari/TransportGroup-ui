import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppTextField,
} from '@/components';

const DriverGeneralSection = ({ values, errors, onChange, setFieldValue }) => {
  return (
    <AppFormSection title="اطلاعات عمومی راننده">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="نام "
            name="FirstName"
            value={values.FirstName}
            onChange={onChange}
            error={!!errors?.FirstName}
            helperText={errors?.FirstName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="نام خانوادگی"
            name="LastName"
            value={values.LastName}
            onChange={onChange}
            error={!!errors?.LastName}
            helperText={errors?.LastName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="کد ملی"
            name="NationalCode"
            value={values.NationalCode}
            onChange={onChange}
            error={!!errors?.NationalCode}
            helperText={errors?.NationalCode}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            type="number"
            label="  شماره موبایل"
            name="MobileNumber"
            value={values.MobileNumber}
            onChange={onChange}
            error={!!errors?.MobileNumber}
            helperText={errors?.MobileNumber}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(DriverGeneralSection);
