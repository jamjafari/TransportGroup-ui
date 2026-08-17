import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppTextField,
} from '@/components';

const LocationGeneralSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
}) => {
  return (
    <AppFormSection title="اطلاعات  مکان">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="نام مکان "
            name="name"
            value={values.name}
            onChange={onChange}
            error={!!errors?.name}
            helperText={errors?.name}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="کد مکان "
            name="code"
            value={values.code}
            onChange={onChange}
            error={!!errors?.code}
            helperText={errors?.code}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            label="آدرس "
            name="address"
            value={values.address}
            onChange={onChange}
            error={!!errors?.address}
            helperText={errors?.address}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            type="number"
            label="  عرض جغرافیایی "
            name="latitude"
            value={values.latitude}
            onChange={onChange}
            error={!!errors?.latitude}
            helperText={errors?.latitude}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            type="number"
            label="  طول جغرافیای "
            name="longitude"
            value={values.longitude}
            onChange={onChange}
            error={!!errors?.longitude}
            helperText={errors?.longitude}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            label="  توضیحات "
            name="description"
            value={values.description}
            onChange={onChange}
            error={!!errors?.description}
            helperText={errors?.description}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(LocationGeneralSection);
