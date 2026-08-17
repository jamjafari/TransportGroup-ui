import React, { memo, useCallback, useState } from 'react';
import Stack from '@mui/system/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { hasErrors, validate } from '@/validation';

import MissionGeneralSection from '../sections/MissionGeneralSection';
import MissionLocationSection from '../sections/MissionLocationSection';
import MissionStartEndSection from '../sections/MissionStartEndSection';

import missionSchema from '../validation/missionSchema';

const defaultValues = {
  vehicleId: null,
  driverId: null,
  originLocationId: null,
  destinationLocationId: null,
  startDate: null,
  endDate: null,
  startTime: null,
  endTime: null,
  startOdometerKM: null,
  endOdometerKM: null,
  description: '',
  distanceKM: null,
  status: null,
};

const MissionForm = ({ initialValues = defaultValues, onSubmit }) => {
  const [errors, setErrors] = useState({});

  const handleValidatedSubmit = useCallback(
    (values) => {
      console.log('MissionForm submit');
      console.log(values);
      const validationErrors = validate(missionSchema, values);
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
          <MissionGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            divider
          />

          <MissionLocationSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
          />
          <MissionStartEndSection
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

export default memo(MissionForm);
