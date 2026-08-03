import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import { AppFormSection, AppSelectform, AppTextField } from '@/components';

import { fuelTypeOptions } from '../constants';

const VehicleTechnicalSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
}) => {
  return (
    <AppFormSection title="اطلاعات فنی خودرو">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="شماره موتور"
            name="engineNumber"
            value={values.engineNumber}
            onChange={onChange}
            error={!!errors?.engineNumber}
            helperText={errors?.engineNumber}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="شماره شاسی"
            name="chassisNumber"
            value={values.chassisNumber}
            onChange={onChange}
            error={!!errors?.chassisNumber}
            helperText={errors?.chassisNumber}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectform
            fullWidth
            required
            label="نوع سوخت"
            name="fuelType"
            value={values.fuelType}
            options={fuelTypeOptions}
            onChange={(value) => setFieldValue('fuelType', value)}
            error={!!errors?.fuelType}
            helperText={errors?.fuelType}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"
            label="کارکرد فعلی (کیلومتر)"
            name="currentKM"
            value={values.currentKM}
            onChange={onChange}
            error={!!errors?.currentKM}
            helperText={errors?.currentKM}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(VehicleTechnicalSection);
