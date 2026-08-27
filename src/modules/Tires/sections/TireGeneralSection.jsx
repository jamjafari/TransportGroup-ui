import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppTextField,
  AppSwitch,
} from '@/components';

const TireGeneralSection = ({ values, errors, onChange, setFieldValue }) => {
  return (
    <AppFormSection title="اطلاعات  تایر">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="برند "
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
            label="مدل "
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
            label="شماره سریال "
            name="serialNumber"
            value={values.serialNumber}
            onChange={onChange}
            error={!!errors?.serialNumber}
            helperText={errors?.serialNumber}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="  سایز "
            name="size"
            value={values.size}
            onChange={onChange}
            error={!!errors?.size}
            helperText={errors?.size}
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
        {/* <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            type="number"
            label="  هزینه خرید "
            name="purchasePrice"
            value={values.purchasePrice}
            onChange={onChange}
            error={!!errors?.purchasePrice}
            helperText={errors?.purchasePrice}
          />
        </Grid> */}
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSwitch
            label="تایر فعال است"
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

export default memo(TireGeneralSection);
