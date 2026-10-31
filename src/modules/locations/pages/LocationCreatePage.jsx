import React, { useState, memo, useCallback } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import LocationForm from "../components/LocationForm";

import useLocation from "../hooks/useLocation";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const LocationCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createLocation } = useLocation();

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      console.log("Submit clicked");
      console.log(values);
      try {
        setSaveError(null);

        const createdId = await createLocation(values);
        navigate(`/locations`);
      } catch (error) {
        setSaveError(error);
      }
    },
    [createLocation, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("افزودن مکان")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={saveError}>
          <LocationForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(LocationCreatePage);
