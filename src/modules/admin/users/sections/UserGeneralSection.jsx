import React, { memo } from 'react';

import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';

import { AppFormSection, AppTextField, AppSwitch } from '@/components';

const UserGeneralSection = ({
  values,
  errors,
  onChange,
  setFieldValue,
  roles,
  isEdit,
}) => {
  const selectedRoleIds = values.roleIds || [];

  const toggleRole = (roleId) => {
    const next = selectedRoleIds.includes(roleId)
      ? selectedRoleIds.filter((id) => id !== roleId)
      : [...selectedRoleIds, roleId];

    setFieldValue('roleIds', next);
  };

  return (
    <AppFormSection title="اطلاعات کاربر" divider>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="نام کاربری"
            name="userName"
            value={values.userName}
            onChange={onChange}
            error={!!errors?.userName}
            helperText={errors?.userName}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppTextField
            fullWidth
            required
            label="نام و نام‌خانوادگی"
            name="fullName"
            value={values.fullName}
            onChange={onChange}
            error={!!errors?.fullName}
            helperText={errors?.fullName}
          />
        </Grid>

        {!isEdit && (
          <Grid size={{ xs: 12, md: 6 }}>
            <AppTextField
              fullWidth
              required
              type="password"
              label="رمز عبور"
              name="password"
              value={values.password}
              onChange={onChange}
              error={!!errors?.password}
              helperText={errors?.password}
            />
          </Grid>
        )}

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSwitch
            label="کاربر فعال است"
            name="isActive"
            checked={values.isActive}
            onChange={(e) => setFieldValue('isActive', e.target.checked)}
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <AppSwitch
            label="حساب قفل باشد"
            name="isLock"
            checked={values.isLock}
            onChange={(e) => setFieldValue('isLock', e.target.checked)}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Typography variant="subtitle2" mb={1}>
            نقش‌ها
          </Typography>

          <FormGroup row>
            {roles.map((role) => (
              <FormControlLabel
                key={role.id}
                control={
                  <Checkbox
                    checked={selectedRoleIds.includes(role.id)}
                    onChange={() => toggleRole(role.id)}
                  />
                }
                label={role.displayName || role.name}
              />
            ))}
          </FormGroup>

          {errors?.roleIds && (
            <Typography variant="caption" color="error">
              {errors.roleIds}
            </Typography>
          )}
        </Grid>
      </Grid>
    </AppFormSection>
  );
};

export default memo(UserGeneralSection);
