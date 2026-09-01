import React, { memo, useCallback, useState } from 'react';

import Stack from '@mui/material/Stack';

import {
  AppForm,
  AppFormActions,
  AppButton,
  AttachmentsButton,
} from '@/components';
import { validate, hasErrors } from '@/validation';
import { sanitizeNumericFields } from '@/utils';

import TenantGeneralSection from '../sections/TenantGeneralSection';
import tenantSchema from '../schemas/tenantSchema';
import Box from '@mui/material/Box';
import TenantLogoUploader from './TenantLogoUploader';
const defaultValues = {
  name: '',
  slug: '',
  subscriptionPlan: '',
  subscriptionExpiresAt: null,
  maxVehicles: '',
  maxUsers: '',
  isActive: true,
};

const TenantForm = ({
  initialValues = defaultValues,
  onSubmit,
  isEdit = false,
}) => {
  const [errors, setErrors] = useState({});

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(tenantSchema, values);
      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        onSubmit?.(sanitizeNumericFields(values, ['maxVehicles', 'maxUsers']));
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
          <TenantGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            isEdit={isEdit}
          />

          {isEdit && values.id && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
              <TenantLogoUploader
                tenantId={values.id}
                tenantName={values.name}
              />
            </Box>
          )}
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

export default memo(TenantForm);
