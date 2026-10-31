import React, { memo, useCallback, useState } from "react";

import { Box, Typography } from "@mui/material";

import { useNavigate } from "react-router-dom";

import TenantForm from "../components/TenantForm";
import useTenant from "../hooks/useTenant";

import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const TenantCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createTenant } = useTenant();

  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError(null);

        await createTenant(values);

        navigate("/admin/tenants");
      } catch (error) {
        console.error("Create tenant error:", error);

        setSubmitError(error);
      }
    },
    [createTenant, navigate],
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
        {t("افزودن سازمان")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={submitError}>
          <TenantForm onSubmit={handleSubmit} isEdit={false} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(TenantCreatePage);
