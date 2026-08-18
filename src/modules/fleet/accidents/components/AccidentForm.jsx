import React, { memo, useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import AccidentGeneralSection from '../sections/AccidentGeneralSection';
import AccidentDetailsSection from '../sections/AccidentDetailsSection';

import * as vehicleApi from '@/modules/fleet/vehicles/api/vehicleApi';
import * as driverApi from '@/modules/drivers/api/driverApi'; // مسیر را با اسم واقعی هماهنگ کن

import accidentSchema from '../schemas/accidentSchema';

const defaultValues = {
  vehicleId: null,
  driverId: null,
  missionId: null,
  accidentDate: null,
  accidentTime: null,
  severity: '',
  description: '',
  odometerKm: '',
  thirdPartyInvolved: false,
  thirdPartyDetails: '',
  estimatedDamageCost: '',
  policeReportNumber: '',
  insuranceClaimNumber: '',
};

const AccidentForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [vehiclesLoading, setVehiclesLoading] = useState(false);
  const [driversLoading, setDriversLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setVehiclesLoading(true);
      const response = await vehicleApi.getVehicles();
      if (response?.success) setVehicles(response.data || []);
      setVehiclesLoading(false);
    })();

    (async () => {
      setDriversLoading(true);
      const response = await driverApi.getDrivers();
      if (response?.success) setDrivers(response.data || []);
      setDriversLoading(false);
    })();
  }, []);

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(accidentSchema, values);
      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        onSubmit?.({ ...values });
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
          <AccidentGeneralSection
            values={values}
            errors={errors}
            setFieldValue={setFieldValue}
            vehicles={vehicles}
            vehiclesLoading={vehiclesLoading}
            drivers={drivers}
            driversLoading={driversLoading}
          />

          <AccidentDetailsSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
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

export default memo(AccidentForm);
