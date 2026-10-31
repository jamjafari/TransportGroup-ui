import React, { useState, memo, useCallback } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import InsuranceForm from "../components/InsuranceForm";

import useInsurance from "../hooks/useInsurance";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const InsuranceCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createInsurance } = useInsurance();

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      console.log("Submit clicked");
      console.log(values);
      try {
        setSaveError(null);

        const createdId = await createInsurance(values);
        navigate(`/insurances/edit/${createdId}`);
      } catch (error) {
        setSaveError(error);
      }
    },
    [createInsurance, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("بیمه جدید")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={saveError}>
          <InsuranceForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(InsuranceCreatePage);
