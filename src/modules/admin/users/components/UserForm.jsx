import React, { memo, useCallback, useEffect, useState } from 'react';

import Stack from '@mui/material/Stack';

import { AppForm, AppFormActions, AppButton } from '@/components';
import { validate, hasErrors } from '@/validation';

import UserGeneralSection from '../sections/UserGeneralSection';
import useRoles from '../hooks/useRoles';
import userSchema from '../schemas/userSchema';

const defaultValues = {
  userName: '',
  fullName: '',
  password: '',
  roleIds: [],
  isActive: true,
  isLock: false,
};

const UserForm = ({
  initialValues = defaultValues,
  onSubmit,
  isEdit = false,
}) => {
  const [errors, setErrors] = useState({});
  const { roles, getRoles } = useRoles();

  useEffect(() => {
    getRoles().then((data) => console.log('Roles loaded:', data));
  }, [getRoles]);

  const handleValidatedSubmit = useCallback(
    (values) => {
      const validationErrors = validate(userSchema, values);
      setErrors(validationErrors);

      if (!hasErrors(validationErrors)) {
        onSubmit?.(values);
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
          <UserGeneralSection
            values={values}
            errors={errors}
            onChange={handleChange}
            setFieldValue={setFieldValue}
            roles={roles}
            isEdit={isEdit}
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

export default memo(UserForm);
