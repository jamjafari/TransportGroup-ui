import React, { memo } from 'react';

import Grid from '@mui/material/Grid';

import { AppFormSection, AppAutocompleteform } from '@/components';

const MissionGeneralSection = ({
  values,
  errors,
  setFieldValue,
  vehicles,
  vehiclesLoading,
  drivers,
  driversLoading,
}) => {
  return (
    <AppFormSection title="اطلاعات پایه ماموریت">
      <Grid container spacing={2}>
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
          <AppAutocompleteform
            fullWidth
            label="نام راننده"
            name="driverId"
            options={drivers}
            loading={driversLoading}
            value={
              drivers.find((driver) => driver.id === values.driverId) || null
            }
            getOptionLabel={(option) =>
              option?.firstName && option?.lastName
                ? `${option.firstName} ${option.lastName}`
                : ''
            }
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            onChange={(event, value) => {
              setFieldValue('driverId', value?.id || null);
            }}
            error={!!errors?.driverId}
            helperText={errors?.driverId}
          />
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(MissionGeneralSection);
