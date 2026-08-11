import React, { memo, useEffect } from 'react';

import Grid from '@mui/material/Grid';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppAutocompleteform,
  AppTextField,
} from '@/components';
import useFuelCardVehicles from '../hooks/useFuelCardVehicles';

const FuelCardGeneralSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
}) => {
  const {
    vehicles,
    loading: vehiclesLoading,
    getVehicles,
  } = useFuelCardVehicles();

  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  const vehicleOptions = vehicles.map((vehicle) => ({
    value: vehicle.id,
    label: vehicle.plateNumber,
  }));
  return (
    <AppFormSection title="اطلاعات  کارت سوخت">
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="شماره کارت "
            name="cardNumber"
            value={values.cardNumber}
            onChange={onChange}
            error={!!errors?.cardNumber}
            helperText={errors?.cardNumber}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppAutocompleteform
            fullWidth
            required
            label="پلاک خودرو"
            name="vehicleId"
            options={vehicles}
            loading={vehiclesLoading}
            value={
              vehicles.find((vehicle) => vehicle.id === values.vehicleId) ||
              null
            }
            getOptionLabel={(option) => option?.plateNumber || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('vehicleId', value?.id || null);
            }}
            error={!!errors?.vehicleId}
            helperText={errors?.vehicleId}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppJalaliDatePicker
            required
            label="تاریخ انقضاء"
            name="expireDate"
            value={values.expireDate}
            onChange={(value) => setFieldValue('expireDate', value)}
            error={!!errors?.expireDate}
            helperText={errors?.expireDate}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(FuelCardGeneralSection);
