import React, { memo, useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import LocationGeneralSection from '../sections/LocationGeneralSection';
// import LocationTechnicalSection from '../sections/LocationTechnicalSection';

import locationSchema from '../validation/locationSchema';

const defaultValues = {
  name: '',
  code: '',
  address: '',
  latitude: '',
  longitude: '',
  desctiption: '',
};

const LocationForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleValidatedSubmit = useCallback(
    (values) => {
      console.log('LocationForm submit');
      console.log(values);
      const validationErrors = validate(locationSchema, values);
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
          <LocationGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            divider
          />

          {/* <LocationTechnicalSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          /> */}

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

export default memo(LocationForm);
