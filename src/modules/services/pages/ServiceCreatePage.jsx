import React, { useState, memo, useCallback } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import ServiceForm from "../components/ServiceForm";

import useService from "../hooks/useService";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const ServiceCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createService } = useService();

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      console.log("Submit clicked");
      console.log(values);
      try {
        setSaveError(null);

        const createdId = await createService(values);
        navigate(`/services/edit/${createdId}`);
      } catch (error) {
        setSaveError(error);
      }
    },
    [createService, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("سرویس جدید")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={saveError}>
          <ServiceForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(ServiceCreatePage);
