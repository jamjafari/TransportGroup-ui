import React, { memo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Alert, Stack } from "@mui/material";

import AppDialog from "@/components/common/dialogs/AppDialog"; // مسیر رو با AppDialog واقعی که برای ConfirmDialog دیدیم هماهنگ کن
import { AppTextField, AppSwitch, AppButton } from "@/components";

import useUser from "../hooks/useUser";

const ResetPasswordDialog = ({ open, user, onClose }) => {
  const { t } = useTranslation();
  const { resetPassword } = useUser();

  const [newPassword, setNewPassword] = useState("");
  const [mustChangePassword, setMustChangePassword] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (newPassword.length < 6) {
      setError(t("رمز عبور باید حداقل ۶ کاراکتر باشد"));
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      await resetPassword({ id: user.id, newPassword, mustChangePassword });
      setNewPassword("");
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
      title={t('ریست رمز عبور — {{name}}', { name: user?.userName || "" })}
      onClose={onClose}
      maxWidth="xs"
      actions={
        <Stack direction="row" spacing={2}>
          <AppButton variant="outlined" onClick={onClose} labelKey="انصراف" />

          <AppButton
            loading={submitting}
            onClick={handleSubmit}
            labelKey="ثبت"
          />
        </Stack>
      }
    >
      <Stack spacing={2}>
        {error && <Alert severity="error">{error}</Alert>}

        <AppTextField
          fullWidth
          type="password"
          label="رمز عبور جدید"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <AppSwitch
          label="کاربر موظف به تغییر رمز در ورود بعدی باشد"
          checked={mustChangePassword}
          onChange={(e) => setMustChangePassword(e.target.checked)}
        />
      </Stack>
    </AppDialog>
  );
};

export default memo(ResetPasswordDialog);
