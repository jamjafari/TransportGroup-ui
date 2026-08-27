import React, { memo, useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import FuelRecordGeneralSection from '../sections/FuelRecordGeneralSection';
import FuelRecordTechnicalSection from '../sections/FuelRecordTechnicalSection';

import useFuelRecordVehicles from '../hooks/useFuelRecordVehicles';
import useFuelRecordDrivers from '../hooks/useFuelRecordDrivers';

import { sanitizeNumericFields } from '@/utils';

import fuelRecordSchema from '../validation/fuelRecordSchema';

const defaultValues = {
  vehicleId: null,
  driverId: null,
  fuelAmount: '',
  unitPrice: '',
  fuelDate: null,
  fullTank: null,
  odometerKM: '',
  fuelType: '',
  fuelStationName: '',
  description: '--',
};

const FuelRecordForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const {
    vehicles,
    loading: vehiclesLoading,
    getVehicles,
  } = useFuelRecordVehicles();
  const {
    drivers,
    loading: driversLoading,
    getDrivers,
  } = useFuelRecordDrivers();

  useEffect(() => {
    getVehicles();
    getDrivers();
  }, [getVehicles, getDrivers]);

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(fuelRecordSchema, values);

      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        onSubmit?.(
          sanitizeNumericFields(values, [
            'fuelAmount',
            'unitPrice',
            'odometerKM',
          ]),
        );
      }
    },
    [onSubmit],
  );

  return (
    <AppForm
      initialValues={initialValues}
      onSubmit={handleValidatedSubmit}
      noValidate
    >
      {({ values, handleChange, setFieldValue, resetForm }) => (
        <Stack spacing={4}>
          <FuelRecordGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            vehicles={vehicles}
            vehiclesLoading={vehiclesLoading}
            drivers={drivers}
            driversLoading={driversLoading}
            divider
          />

          <FuelRecordTechnicalSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            vehicles={vehicles}
          />

          <AppFormActions align="flex-end" spacing={2} divider>
            <AppButton
              variant="outlined"
              onClick={() => {
                resetForm();
                setErrors({});
              }}
            >
              انصراف
            </AppButton>

            <AppButton type="submit" variant="contained">
              ذخیره
            </AppButton>
          </AppFormActions>
        </Stack>
      )}
    </AppForm>
  );
};

export default memo(FuelRecordForm);
