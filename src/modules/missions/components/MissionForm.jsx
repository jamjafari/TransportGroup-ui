import React, { memo, useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import MissionGeneralSection from '../sections/MissionGeneralSection';
import MissionLocationSection from '../sections/MissionLocationSection';
import MissionStartEndSection from '../sections/MissionStartEndSection';

import useMissionVehicles from '../hooks/useMissionVehicles';
import useMissionDriver from '../hooks/useMissionDriver';

import { sanitizeNumericFields } from '@/utils';

import missionSchema from '../validation/missionSchema';

const defaultValues = {
  vehicleId: null,
  driverId: null,
  originLocationId: null,
  destinationLocationId: null,
  startDate: null,
  endDate: null,
  startTime: null,
  endTime: null,
  startOdometerKm: null,
  endOdometerKm: null,
  description: '',
  distanceKm: null,
  status: null,
};

const MissionForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const {
    vehicles,
    loading: vehiclesLoading,
    getVehicles,
  } = useMissionVehicles();
  const { drivers, loading: driversLoading, getDrivers } = useMissionDriver();

  useEffect(() => {
    getVehicles();
    getDrivers();
  }, [getVehicles, getDrivers]);

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(missionSchema, values);
      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        onSubmit?.(
          sanitizeNumericFields(values, [
            'startOdometerKm',
            'endOdometerKm',
            'distanceKm',
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
          <MissionGeneralSection
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

          <MissionLocationSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          />

          <MissionStartEndSection
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

export default memo(MissionForm);
