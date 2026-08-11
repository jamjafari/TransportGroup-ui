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
            name="firstName"
            value={values.firstName}
            onChange={onChange}
            error={!!errors?.firstName}
            helperText={errors?.firstName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="نام خانوادگی"
            name="lastName"
            value={values.lastName}
            onChange={onChange}
            error={!!errors?.lastName}
            helperText={errors?.lastName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="کد ملی"
            name="nationalCode"
            value={values.nationalCode}
            onChange={onChange}
            error={!!errors?.nationalCode}
            helperText={errors?.nationalCode}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            type="number"
            label="  شماره موبایل"
            name="mobileNumber"
            value={values.mobileNumber}
            onChange={onChange}
            error={!!errors?.mobileNumber}
            helperText={errors?.mobileNumber}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(DriverGeneralSection);
