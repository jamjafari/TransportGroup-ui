import React, { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Typography, Alert, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

import { useNavigate, useLocation } from 'react-router-dom';

import { AppCard, AppTextField, AppButton } from '@/components';
import { getPostLoginRedirect } from '@/utils/authRedirect'; // ✅ اضافه شد

import { apiClient } from '@/services';
import { useAuth } from '@/hooks';
import toApiError from '@/services/apiError';
import i18n from '@/i18n';
import { STRONG_PASSWORD_RULES, isStrongPassword } from '@/validation';

// پیام خطای سرور: هم { message } و هم خطای اعتبارسنجی { errors: { NewPassword: [...] } }
// (مسیر تغییر اجباری مستقیم از axios می‌آید و پیام‌هایش در errors است، نه message)
const serverErrorText = (err) => {
  const data = err?.response?.data;
  if (data?.message) return data.message;
  if (data?.errors && typeof data.errors === 'object') {
    return Object.values(data.errors).flat().filter(Boolean).join(' — ');
  }
  return err?.message;
};

// ✅ فهرست زنده‌ی شرط‌های رمز قوی زیر فیلد رمز جدید
const PasswordChecklist = ({ password, confirmPassword }) => {
  const { t } = useTranslation();

  const items = [
    ...STRONG_PASSWORD_RULES.map((rule) => ({ key: rule.key, label: rule.label, ok: rule.test(password) })),
    { key: 'match', label: 'تکرار رمز با رمز جدید یکسان است', ok: !!password && password === confirmPassword },
  ];

  return (
    <Stack spacing={0.5} sx={{ mt: -1 }} aria-live="polite">
      {items.map((item) => (
        <Stack key={item.key} direction="row" spacing={1} alignItems="center">
          {item.ok ? (
            <CheckCircleIcon fontSize="small" color="success" />
          ) : (
            <RadioButtonUncheckedIcon fontSize="small" color="disabled" />
          )}
          <Typography variant="bodyText" color={item.ok ? 'success.main' : 'text.secondary'}>
            {t(item.label)}
          </Typography>
        </Stack>
      ))}
    </Stack>
  );
};

const ChangePasswordPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { forceChangePassword } = useAuth();

  // ✅ اگه از صفحه‌ی لاگین (با mustChangePassword) اومده باشیم، username همراهش هست
  const isForced = !!location.state?.username;
  const forcedUsername = location.state?.username;

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setError('');

    if (!isStrongPassword(newPassword)) {
      setError(t('رمز عبور جدید شرایط لازم را ندارد؛ فهرست زیر فیلد را ببینید.'));
      return;
    }

    if (newPassword !== confirmPassword) {
      setError(t('رمز عبور جدید و تکرار آن یکسان نیستند'));
      return;
    }

    setSubmitting(true);

    try {
      if (isForced) {
        // ✅ حالت تغییر اجباری (بدون توکن) — این تابع خودش بعد از موفقیت وارد سیستم هم می‌کند
        const result = await forceChangePassword({
          userName: forcedUsername,
          currentPassword,
          newPassword,
        });

        navigate(getPostLoginRedirect(result.user)); // ✅ اصلاح شد (قبلاً '/dashboard' بود)
        return;
      }

      // حالت عادی (کاربر لاگین‌شده که می‌خواد رمزش رو عوض کنه)
      const response = await apiClient.post('/users/change-password', {
        currentPassword,
        newPassword,
        confirmPassword,
      });

      if (!response.success) {
        throw toApiError(response, 'خطا در تغییر رمز عبور');
      }

      setSuccess(true);
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err) {
      setError(serverErrorText(err));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t(isForced ? 'برای ادامه، رمز عبور خود را تغییر دهید' : 'تغییر رمز عبور')}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {i18n.t('رمز عبور با موفقیت تغییر کرد.')}
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

          <PasswordChecklist password={newPassword} confirmPassword={confirmPassword} />

          <Box display="flex" justifyContent="flex-end" gap={2} mt={2}>
            {!isForced && (
              <AppButton variant="outlined" onClick={() => navigate(-1)}>
                {i18n.t('انصراف')}
              </AppButton>
            )}

            <AppButton
              onClick={handleSubmit}
              loading={submitting}
              disabled={
                !currentPassword ||
                !isStrongPassword(newPassword) ||
                newPassword !== confirmPassword
              }
            >
              {i18n.t('ثبت')}
            </AppButton>
          </Box>
        </Box>
      </AppCard>
    </Box>
  );
};

export default memo(ChangePasswordPage);
