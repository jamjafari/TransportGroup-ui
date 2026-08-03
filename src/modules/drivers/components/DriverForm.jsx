import React, { memo, useCallback, useState } from 'react';
import Stack from '@mui/system/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import DriverGeneralSection from '../sections/DriverGeneralSection';
import DriverTechnicalSection from '../sections/DriverTechnicalSection';

import driverSchema from '../validation/driverSchema';

const defaultValues = {
  PersonnelCode: '',
  FirstName: '',
  LastName: '',
  NationalCode: '',
  LicenseExpireDate: null,
  IsActive: '',
  MobileNumber: '',
  LicenseNumber: '',
  Description: '',
};

const DriverForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(driverSchema, values);

      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
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
          <DriverGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            divider
          />

          <DriverTechnicalSection
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

export default memo(DriverForm);
