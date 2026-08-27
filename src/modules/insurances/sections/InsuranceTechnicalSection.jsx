import React, { memo, useMemo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppTextField,
  AppJalaliDatePicker,
  AppTimePicker,
} from '@/components';

import { statusTypeOptions, insuranceTypeOptions } from '../constants';

const MissionStartEndSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
  vehicles,
}) => {
  return (
    <AppFormSection title="اطلاعات  فنی بیمه ">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectform
            fullWidth
            required
            label="نوع بیمه"
            name="insuranceType"
            value={values.insuranceType}
            options={insuranceTypeOptions}
            onChange={(value) => setFieldValue('insuranceType', value)}
            error={!!errors?.insuranceType}
            helperText={errors?.insuranceType}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth

            label=" شماره بیمه "
            name="policyNumber"
            value={values.policyNumber}
            onChange={onChange}
            error={!!errors?.policyNumber}
            helperText={errors?.policyNumber}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ شروع بیمه"
            name="startDate"
            value={values.startDate}
            onChange={(value) => setFieldValue('startDate', value)}
            error={!!errors?.startDate}
            helperText={errors?.startDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            label="تاریخ پایان بیمه"
            required
            name="endDate"
            value={values.endDate}
            onChange={(value) => setFieldValue('endDate', value)}
            error={!!errors?.endDate}
            helperText={errors?.endDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"
            label="مبلغ حق بیمه"
            name="premiumAmount"
            value={values.premiumAmount}
            onChange={onChange}
            error={!!errors?.premiumAmount}
            helperText={errors?.premiumAmount}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"
            label="سقف تعهد بیمه"
            name="coverageAmount"
            value={values.coverageAmount}
            onChange={onChange}
            error={!!errors?.coverageAmount}
            helperText={errors?.coverageAmount}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectform
            fullWidth
            required
            label="وضعیت بیمه"
            name="status"
            value={values.status}
            options={statusTypeOptions}
            onChange={(value) => setFieldValue('status', value)}
            error={!!errors?.status}
            helperText={errors?.status}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(MissionStartEndSection);
