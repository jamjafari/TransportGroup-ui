import React, { memo } from 'react';

// ✅ New
import { AppForm } from '@/components/common/forms';

import { AppStack } from '@/components/common/layout/AppStack';

import { AppTextField } from '@/components/common/forms/inputs';

import { AppCheckbox } from '@/components/common/forms';

import { AppButton } from '@/components/common/buttons';

import { AppAlert } from '@/components/common/alerts';

import useLogin from '../hooks/useLogin';

const LoginForm = () => {
  const {
    username,
    password,
    rememberMe,
    loading,
    error,

    setUsername,
    setPassword,
    setRememberMe,

    handleSubmit,
  } = useLogin();

  return (
    <AppForm onSubmit={handleSubmit}>
      <AppStack spacing={3}>
        {!!error && (
          <AppAlert open severity="error" title="خطا">
            {error}
          </AppAlert>
        )}

        <AppTextField
          fullWidth
          required
          name="username"
          label="نام کاربری"
          placeholder="نام کاربری را وارد کنید"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <AppTextField
          fullWidth
          required
          name="password"
          type="password"
          label="رمز عبور"
          placeholder="رمز عبور را وارد کنید"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <AppCheckbox
          name="rememberMe"
          label="مرا به خاطر بسپار"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />

        <AppButton fullWidth size="large" type="submit" loading={loading}>
          ورود به سامانه
        </AppButton>
      </AppStack>
    </AppForm>
  );
};

export default memo(LoginForm);
