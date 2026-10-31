import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Alert, Stack, Typography } from "@mui/material";

import { AppTextField, AppButton, AppCard } from "@/components";

import * as driverApi from "../api/driverApi";
import toApiError from '@/services/apiError';
import i18n from '@/i18n';

const DriverUserAccountSection = ({ driverId, hasUserAccount }) => {
  const { t } = useTranslation();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!userName || password.length < 6) {
      setError(t("نام کاربری الزامی و رمز عبور باید حداقل ۶ کاراکتر باشد"));
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      const response = await driverApi.createUserForDriver(driverId, {
        userName,
        password,
      });

      if (!response.success) {
        throw toApiError(response, "خطا در ساخت حساب کاربری");
      }

      setSuccess(true);
      setUserName("");
      setPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (hasUserAccount) {
    return (
      <AppCard sx={{ p: 4 }}>
        <Typography variant="subtitle1" fontWeight={700} mb={1}>
          {i18n.t('حساب کاربری موبایل')}
        </Typography>
        <Alert severity="success">
          {i18n.t('این راننده از قبل حساب کاربری برای ورود از موبایل دارد.')}
        </Alert>
      </AppCard>
    );
  }

  return (
    <AppCard sx={{ p: 4 }}>
      <Typography variant="subtitle1" fontWeight={700} mb={2}>
        {i18n.t('ساخت حساب کاربری موبایل برای راننده')}
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={2}>
        {i18n.t('با ساخت این حساب، راننده می‌تواند از طریق موبایل خودش وارد سیستم شده و موقعیت مأموریت‌های خود را ثبت کند.')}
      </Typography>

      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}
        {success && (
          <Alert severity="success">{i18n.t('حساب کاربری با موفقیت ساخته شد.')}</Alert>
        )}

        <AppTextField
          fullWidth
          label="نام کاربری"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />

        <AppTextField
          fullWidth
          type="password"
          label="رمز عبور اولیه"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <AppButton
          loading={submitting}
          onClick={handleSubmit}
          sx={{ alignSelf: "flex-start" }}
          labelKey="ساخت حساب کاربری"
        ></AppButton>
      </Stack>
    </AppCard>
  );
};

export default memo(DriverUserAccountSection);
