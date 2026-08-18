import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppTextField,
  AppPlateNumberField,
} from '@/components';

import { vehicleStatusOptions } from '../constants';

const VehicleGeneralSection = ({ values, errors, onChange, setFieldValue }) => {
  return (
    <AppFormSection title="اطلاعات عمومی خودرو">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppPlateNumberField
            required
            label="شماره پلاک"
            value={values.plateNumber}
            onChange={(value) => setFieldValue('plateNumber', value)}
            error={!!errors?.plateNumber}
            helperText={errors?.plateNumber}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="برند"
            name="brand"
            value={values.brand}
            onChange={onChange}
            error={!!errors?.brand}
            helperText={errors?.brand}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="مدل"
            name="model"
            value={values.model}
            onChange={onChange}
            error={!!errors?.model}
            helperText={errors?.model}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            type="number"
            label="سال ساخت (شمسی)"
            name="productionYear"
            value={values.productionYear}
            onChange={onChange}
            error={!!errors?.productionYear}
            helperText={errors?.productionYear}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ خرید"
            name="purchaseDate"
            value={values.purchaseDate}
            onChange={(value) => setFieldValue('purchaseDate', value)}
            error={!!errors?.purchaseDate}
            helperText={errors?.purchaseDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectform
            fullWidth
            required
            label="وضعیت خودرو"
            name="status"
            value={values.status}
            options={vehicleStatusOptions}
            onChange={(value) => setFieldValue('status', value)}
            error={!!errors?.status}
            helperText={errors?.status}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(VehicleGeneralSection);
