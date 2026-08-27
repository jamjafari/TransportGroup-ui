import React, { memo, useCallback, useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import InsuranceGeneralSection from '../sections/InsuranceGeneralSection';
import InsuranceTechnicalSection from '../sections/InsuranceTechnicalSection';

import useInsuranceVehicles from '../hooks/useInsuranceVehicles';
import useInsuranceVendors from '../hooks/useInsuranceVendors';

import { sanitizeNumericFields } from '@/utils';

import insuranceSchema from '../validation/insuranceSchema';

const defaultValues = {
  vehicleId: null,
  vendorId: null,
  premiumAmount: '',
  coverageAmount: '',

  startDate: null,
  endDate: null,
  insuranceType: '',
  status: '',
  policyNumber: '',

  description: '',
};

const InsuranceForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const {
    vehicles,
    loading: vehiclesLoading,
    getVehicles,
  } = useInsuranceVehicles();
  const {
    vendors,
    loading: vendorsLoading,
    getVendors,
  } = useInsuranceVendors();

  useEffect(() => {
    getVehicles();
    getVendors();
  }, [getVehicles, getVendors]);

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(insuranceSchema, values);

      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        onSubmit?.(
          sanitizeNumericFields(values, ['premiumAmount', 'coverageAmount']),
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
          <InsuranceGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            vehicles={vehicles}
            vehiclesLoading={vehiclesLoading}
            vendors={vendors}
            vendorsLoading={vendorsLoading}
            divider
          />

          <InsuranceTechnicalSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            // vehicles={vehicles}
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

export default memo(InsuranceForm);
