import React, { memo, useCallback, useState } from 'react';
import Stack from '@mui/system/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import FuelCardGeneralSection from '../sections/FuelCardGeneralSection';

import fuelCardSchema from '../validation/fuelCardSchema';

const defaultValues = {
  cardNumber: '',
  vehicleId: null,

  expireDate: null,
};

const FuelCardForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleValidatedSubmit = useCallback(
    (values) => {
      console.log('FuelCardForm submit');
      console.log(values);
      const validationErrors = validate(fuelCardSchema, values);
      console.log('Validation errors:', validationErrors);
      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        console.log('Validation passed');
        onSubmit?.({
          ...values,
        });
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
          <FuelCardGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
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

export default memo(FuelCardForm);
