import React, { memo, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import useMissionVehicle from '../hooks/useMissionVehicle';
import useMissionDriver from '../hooks/useMissionDriver';

import {
  AppFormSection,
  AppSelectform,
  AppJalaliDatePicker,
  AppTextField,
  AppAutocompleteform,
} from '@/components';

const MissionGeneralSection = ({ values, errors, onChange, setFieldValue }) => {
  const {
    vehicles,
    loading: vehiclesLoading,
    getVehicles,
  } = useMissionVehicle();

  const { drivers, loading: driversLoading, getDrivers } = useMissionDriver();
  useEffect(() => {
    getVehicles();

    getDrivers();
  }, [getVehicles, getDrivers]);

  const vehicleOptions = vehicles.map((vehicle) => ({
    value: vehicle.id,
    label: vehicle.plateNumber,
  }));

  const driverOptions = drivers.map((driver) => ({
    value: driver.id,
    label: driver.driverName,
  }));
  return (
    <AppFormSection title="اطلاعات  مورد نیاز هزینه جدید">
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

            label="نام  راننده "
            name="driverId"
            options={drivers}
            loading={driversLoading}
            value={
              drivers.find((driver) => driver.id === values.driverId) || null
            }
            getOptionLabel={(option) =>
              (option?.firstName && option?.lastName) || ''
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
