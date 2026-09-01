import React, { memo, useState } from 'react';

import { Alert, Stack } from '@mui/material';

import AppDialog from '@/components/common/dialogs/AppDialog';
import { AppTextField, AppButton } from '@/components';

import useTenant from '../hooks/useTenant';

const AddTenantAdminDialog = ({ open, tenant, onClose }) => {
  const { createTenantAdmin } = useTenant();

  const [userName, setUserName] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!userName || !fullName || password.length < 6) {
      setError('همه‌ی فیلدها الزامی هستند و رمز باید حداقل ۶ کاراکتر باشد');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      await createTenantAdmin(tenant.id, { userName, fullName, password });
      setUserName('');
      setFullName('');
      setPassword('');
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AppDialog
      open={open}
      title={`افزودن ادمین — ${tenant?.name || ''}`}
      onClose={onClose}
      maxWidth="xs"
      actions={
        <Stack direction="row" spacing={2}>
          <AppButton variant="outlined" onClick={onClose}>
            انصراف
          </AppButton>
          <AppButton loading={submitting} onClick={handleSubmit}>
            ثبت
          </AppButton>
        </Stack>
      }
    >
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}

        <AppTextField
          fullWidth
          label="نام کاربری"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <AppTextField
          fullWidth
          label="نام و نام‌خانوادگی"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <AppTextField
          fullWidth
          type="password"
          label="رمز عبور اولیه"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Stack>
    </AppDialog>
  );
};

export default memo(AddTenantAdminDialog);
