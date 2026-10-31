import React, { memo, useCallback, useState } from "react";

import { Box, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import UserForm from "../components/UserForm";
import useUser from "../hooks/useUser";

import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const UserCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createUser } = useUser();

  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError(null);

        await createUser(values);

        navigate("/admin/users");
      } catch (error) {
        console.error("Create user error:", error);

        setSubmitError(error);
      }
    },
    [createUser, navigate],
  );

  return (
    <Box
      sx={{
        maxWidth: 900,
        mx: "auto",
        py: 3,
      }}
    >
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("افزودن کاربر")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={submitError}>
          <UserForm onSubmit={handleSubmit} isEdit={false} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(UserCreatePage);
