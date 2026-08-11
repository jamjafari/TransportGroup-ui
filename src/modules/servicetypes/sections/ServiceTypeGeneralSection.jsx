import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppTextField,
} from '@/components';

const serviceTypeGeneralSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
}) => {
  return (
    <AppFormSection title="اطلاعات  نوع سرویس">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="کد "
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
            required
            label=" عنوان سرویس"
            name="title"
            value={values.title}
            onChange={onChange}
            error={!!errors?.title}
            helperText={errors?.title}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            type="number"
            label="  سرویس دوره ای کیلومتر "
            name="serviceIntervalKM"
            value={values.serviceIntervalKM}
            onChange={onChange}
            error={!!errors?.serviceIntervalKM}
            helperText={errors?.serviceIntervalKM}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            type="number"
            label="   سرویس دوره ای روزانه"
            name="serviceIntervalDays"
            value={values.serviceIntervalDays}
            onChange={onChange}
            error={!!errors?.serviceIntervalDays}
            helperText={errors?.serviceIntervalDays}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(serviceTypeGeneralSection);
