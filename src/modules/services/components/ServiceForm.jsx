import React, { memo, useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import ServiceGeneralSection from '../sections/ServiceGeneralSection';

import useServiceVehicles from '../hooks/useServiceVehicles';
import useServiceVendors from '../hooks/useServiceVendors';
import useServiceServiceTypes from '../hooks/useServiceServiceTypes';

import { sanitizeNumericFields } from '@/utils';

import serviceSchema from '../validation/serviceSchema';

const defaultValues = {
  vehicleId: null,
  vendorId: null,
  serviceTypeId: null,

  serviceDate: null,

  odometerKM: '',
  cost: '',
};

const ServiceForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const {
    vehicles,
    loading: vehiclesLoading,
    getVehicles,
  } = useServiceVehicles();
  const { vendors, loading: vendorsLoading, getVendors } = useServiceVendors();
  const {
    serviceTypes,
    loading: serviceTypesLoading,
    getServiceTypes,
  } = useServiceServiceTypes();

  useEffect(() => {
    getVehicles();
    getVendors();
    getServiceTypes();
  }, [getVehicles, getVendors, getServiceTypes]);

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(serviceSchema, values);
      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        onSubmit?.(sanitizeNumericFields(values, ['odometerKM', 'cost']));
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
          <ServiceGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            vehicles={vehicles}
            vehiclesLoading={vehiclesLoading}
            vendors={vendors}
            vendorsLoading={vendorsLoading}
            serviceTypes={serviceTypes}
            serviceTypesLoading={serviceTypesLoading}
            divider
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

export default memo(ServiceForm);
