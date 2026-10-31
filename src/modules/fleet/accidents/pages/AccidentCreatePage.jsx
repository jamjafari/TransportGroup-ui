import React, { memo, useCallback } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import AccidentForm from "../components/AccidentForm";
import useAccident from "../hooks/useAccident";
import { AppCard } from "@/components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const AccidentCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { createAccident } = useAccident();
  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError(null);

        const createdId = await createAccident(values);
        navigate(`/accidents/edit/${createdId}`);
      } catch (error) {
        setSubmitError(error);
      }
    },
    [createAccident, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ثبت تصادف")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={submitError}>
          <AccidentForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(AccidentCreatePage);
