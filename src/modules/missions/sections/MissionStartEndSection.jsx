import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppTextField,
  AppSwitch,
  AppJalaliDatePicker,
  AppTimePicker,
} from '@/components';

import { attachmentCategoryOptions } from '../constants';

const MissionStartEndSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
}) => {
  return (
    <AppFormSection title="اطلاعات  شروع و پایان">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ شروع ماموریت"
            name="startDate"
            value={values.startDate}
            onChange={(value) => setFieldValue('startDate', value)}
            error={!!errors?.startDate}
            helperText={errors?.startDate}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            label="تاریخ پایان ماموریت"
            name="endDate"
            value={values.endDate}
            onChange={(value) => setFieldValue('endDate', value)}
            error={!!errors?.endDate}
            helperText={errors?.endDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTimePicker
            fullWidth
            label="زمان شروع مأموریت"
            name="startTime"
            value={values.startTime ?? ''}
            onChange={(event) => setFieldValue('startTime', event.target.value)}
            error={!!errors?.startTime}
            helperText={errors?.startTime}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTimePicker
            fullWidth
            label="زمان پایان مأموریت"
            name="endTime"
            value={values.endTime ?? ''}
            onChange={(event) => setFieldValue('endTime', event.target.value)}
            error={!!errors?.endTime}
            helperText={errors?.endTime}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"

            label="کیلومتر خودرو در شروع "
            name="startOdometerKm"
            value={values.startOdometerKm}
            onChange={onChange}
            error={!!errors?.startOdometerKm}
            helperText={errors?.startOdometerKm}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"

            label="کیلومتر خودرو در پایان "
            name="endOdometerKm"
            value={values.endOdometerKm}
            onChange={onChange}
            error={!!errors?.endOdometerKm}
            helperText={errors?.endOdometerKm}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"

            label="مسافت مبدا و مقصد (کیلومتر)"
            name="distanceKM"
            value={values.distanceKM}
            onChange={onChange}
            error={!!errors?.distanceKM}
            helperText={errors?.distanceKM}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppSelectform
            fullWidth
            required
            label="وضعیت ماموریت "
            name="status"
            value={values.status}
            options={attachmentCategoryOptions}
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
