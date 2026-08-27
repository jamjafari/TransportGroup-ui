import React, { memo, useCallback, useState } from 'react';
import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import VehicleGeneralSection from '../sections/VehicleGeneralSection';
import VehicleTechnicalSection from '../sections/VehicleTechnicalSection';
import { jalaliYearToGregorian, sanitizeNumericFields } from '@/utils';

import vehicleSchema from '../validation/vehicleSchema';

const defaultValues = {
  plateNumber: '',
  brand: '',
  model: '',
  productionYear: '',
  purchaseDate: null,
  status: '',
  engineNumber: '',
  chassisNumber: '',
  fuelType: '',
  currentKM: '',
};

const VehicleForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(vehicleSchema, values);

      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        const sanitized = sanitizeNumericFields(values, ['currentKM']);

        onSubmit?.({
          ...sanitized,
          productionYear: jalaliYearToGregorian(values.productionYear),
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
          <VehicleGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            divider
          />

          <VehicleTechnicalSection
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

export default memo(VehicleForm);
