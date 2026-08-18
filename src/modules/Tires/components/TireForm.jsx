import React, { memo, useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import TireGeneralSection from '../sections/TireGeneralSection';

import tireSchema from '../validation/tireSchema';

const defaultValues = {
  brand: '',
  model: '',
  serialNumber: '',
  size: '',
  purchaseDate: null,
  purchasePrice: '',
  isActive: '',
};

const TireForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleValidatedSubmit = useCallback(
    (values) => {
      //   console.log('TireForm submit');
      //   console.log(values);
      const validationErrors = validate(tireSchema, values);
      //   console.log('Validation errors:', validationErrors);
      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        // console.log('Validation passed');
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
          <TireGeneralSection
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

export default memo(TireForm);
