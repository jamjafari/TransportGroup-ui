import React, { memo, useCallback, useState } from 'react';
import Stack from '@mui/system/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import FuelRecordGeneralSection from '../sections/FuelRecordGeneralSection';
import FuelRecordTechnicalSection from '../sections/FuelRecordTechnicalSection';
import { jalaliYearToGregorian } from '@/utils';

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

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(fuelRecordSchema, values);

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
          <FuelRecordGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            divider
          />

          <FuelRecordTechnicalSection
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

export default memo(FuelRecordForm);
