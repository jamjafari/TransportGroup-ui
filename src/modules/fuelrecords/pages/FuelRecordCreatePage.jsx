import React, { useState, memo, useCallback } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import FuelRecordForm from "../components/FuelRecordForm";

import useFuelRecord from "../hooks/useFuelRecord";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const FuelRecordCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createFuelRecord } = useFuelRecord();

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      console.log("Submit clicked");
      console.log(values);
      try {
        setSaveError(null);

        const createdId = await createFuelRecord(values);
        navigate(`/fuelRecords/edit/${createdId}`);
      } catch (error) {
        setSaveError(error);
      }
    },
    [createFuelRecord, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("سوختگیری جدید")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={saveError}>
          <FuelRecordForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(FuelRecordCreatePage);
