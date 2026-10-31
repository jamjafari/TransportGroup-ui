import React, { memo, useCallback, useState } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import ServiceTypeForm from "../components/ServiceTypeForm";

import useServiceType from "../hooks/useServiceType";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const ServiceTypeCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createServiceType } = useServiceType();

  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError(null);

        const createdId = await createServiceType(values);

        navigate(`/serviceTypes`);
      } catch (error) {
        console.error("Create user error:", error);

        setSubmitError(error);
      }
    },
    [createServiceType, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("افزودن نوع سرویس")}
      </Typography>
      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={submitError}>
          <ServiceTypeForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(ServiceTypeCreatePage);
