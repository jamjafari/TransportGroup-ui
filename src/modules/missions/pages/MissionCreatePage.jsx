import React, { useState, memo, useCallback } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import MissionForm from "../components/MissionForm";

import useMission from "../hooks/useMission";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const MissionCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createMission } = useMission();

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      console.log("Submit clicked");
      console.log(values);
      try {
        setSaveError(null);

        const createdId = await createMission(values);
        navigate(`/missions`);
      } catch (error) {
        setSaveError(error);
      }
    },
    [createMission, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ماموریت جدید")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={saveError}>
          <MissionForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(MissionCreatePage);
