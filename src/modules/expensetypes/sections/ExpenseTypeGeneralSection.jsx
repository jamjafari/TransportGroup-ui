import React, { memo, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppSwitch,
  AppTextField,
} from '@/components';

const ExpenseTypeGeneralSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
}) => {
  return (
    <AppFormSection title="اطلاعات  کارت سوخت">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label=" کد انحصاری "
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
            label=" عنوان نوع هزینه  "
            name="title"
            value={values.title}
            onChange={onChange}
            error={!!errors?.title}
            helperText={errors?.title}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSwitch
            label="  فعال"
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

export default memo(ExpenseTypeGeneralSection);
