import React, { memo, useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';
import { sanitizeNumericFields } from '@/utils';

import TireGeneralSection from '../sections/TireGeneralSection';

import tireSchema from '../validation/tireSchema';

const defaultValues = {
  brand: '',
  model: '',
  serialNumber: '',
  size: '',
  purchaseDate: null,
  purchasePrice: '',
  isActive: true,
};

const TireForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(tireSchema, values);
      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        onSubmit?.(sanitizeNumericFields(values, ['purchasePrice']));
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
