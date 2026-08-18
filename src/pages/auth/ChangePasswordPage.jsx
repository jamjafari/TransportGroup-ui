import React, { memo, useState } from 'react';

import { Box, Typography, Alert } from '@mui/material';

import { useNavigate } from 'react-router-dom';

import { AppCard, AppTextField, AppButton } from '@/components';

import { apiClient } from '@/services';

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setError('');

    if (newPassword.length < 6) {
      setError('رمز عبور جدید باید حداقل ۶ کاراکتر باشد');
      return;
    }

    if (newPassword !== confirmPassword) {
      setError('رمز عبور جدید و تکرار آن یکسان نیستند');
      return;
    }

    setSubmitting(true);

    try {
      const response = await apiClient.post('/users/change-password', {
        currentPassword,
        newPassword,
        confirmPassword,
      });

      if (!response.success) {
        throw new Error(response.errors?.[0] || 'خطا در تغییر رمز عبور');
      }

      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        تغییر رمز عبور
      </Typography>

      <AppCard sx={{ p: 4 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            رمز عبور با موفقیت تغییر کرد.
          </Alert>
        )}

        <Box display="flex" flexDirection="column" gap={2}>
          <AppTextField
            fullWidth
            type="password"
            label="رمز عبور فعلی"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />

          <AppTextField
            fullWidth
            type="password"
            label="رمز عبور جدید"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <AppTextField
            fullWidth
            type="password"
            label="تکرار رمز عبور جدید"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            <AppButton variant="outlined" onClick={() => navigate(-1)}>
              انصراف
            </AppButton>

            <AppButton onClick={handleSubmit} loading={submitting}>
              ثبت
            </AppButton>
          </Box>
        </Box>
      </AppCard>
    </Box>
  );
};

export default memo(ChangePasswordPage);
