import React, { memo, useMemo } from 'react';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {
  AppFormSection,
  AppSelectform,
  AppTextField,
  AppSwitch,
  AppJalaliDatePicker,
} from '@/components';

import { fuelTypeOptions } from '../constants';

const FuelRecordTechnicalSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
  vehicles,
}) => {
  const selectedVehicle = useMemo(
    () => vehicles.find((v) => v.id === values.vehicleId) || null,
    [vehicles, values.vehicleId],
  );

  return (
    <AppFormSection title="اطلاعات سوختگیری">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ سوختگیری"
            name="fuelDate"
            value={values.fuelDate}
            onChange={(value) => setFieldValue('fuelDate', value)}
            error={!!errors?.fuelDate}
            helperText={errors?.fuelDate}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            type="number"
            required
            label="کیلومتر خودرو"
            name="odometerKM"
            value={values.odometerKM}
            onChange={onChange}
            error={!!errors?.odometerKM}
            helperText={
              errors?.odometerKM ||
              (selectedVehicle
                ? `کارکرد فعلی ثبت‌شده: ${selectedVehicle.currentKM?.toLocaleString() ?? '—'} کیلومتر`
                : 'ابتدا خودرو را انتخاب کنید')
            }
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
            label="مقدار سوختگیری (لیتر)"
            name="fuelAmount"
            value={values.fuelAmount}
            onChange={onChange}
            error={!!errors?.fuelAmount}
            helperText={errors?.fuelAmount}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            type="number"
            label="قیمت هر واحد"
            name="unitPrice"
            value={values.unitPrice}
            onChange={onChange}
            error={!!errors?.unitPrice}
            helperText={errors?.unitPrice}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSwitch
            label="آیا باک پر شده است؟"
            name="fullTank"
            checked={values.fullTank}
            onChange={(event) =>
              setFieldValue('fullTank', event.target.checked)
            }
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            label="نام جایگاه سوختگیری"
            name="fuelStationName"
            value={values.fuelStationName}
            onChange={onChange}
            error={!!errors?.fuelStationName}
            helperText={errors?.fuelStationName}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(FuelRecordTechnicalSection);
