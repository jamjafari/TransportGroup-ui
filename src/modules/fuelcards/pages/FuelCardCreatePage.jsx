import React, { useState, memo, useCallback } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import FuelCardForm from "../components/FuelCardForm";

import useFuelCard from "../hooks/useFuelCard";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const FuelCardCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createFuelCard } = useFuelCard();

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      console.log("Submit clicked");
      console.log(values);
      try {
        setSaveError(null);

        const createdId = await createFuelCard(values);
        navigate(`/fuelCards`);
      } catch (error) {
        setSaveError(error);
      }
    },
    [createFuelCard, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("افزودن کارت سوخت")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={saveError}>
          <FuelCardForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(FuelCardCreatePage);
