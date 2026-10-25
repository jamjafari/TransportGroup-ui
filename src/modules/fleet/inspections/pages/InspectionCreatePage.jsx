import React, { memo, useCallback, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";

import { useNavigate } from "react-router-dom";

import InspectionForm from "../components/InspectionForm";
import useInspection from "../hooks/useInspection";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
const InspectionCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { createInspection } = useInspection();
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError("");
        const createdId = await createInspection(values);
        navigate(`/inspections/edit/${createdId}`);
      } catch (error) {
        setSubmitError(error.message);
      }
    },
    [createInspection, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ثبت معاینه فنی")}
      </Typography>

      {submitError && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {submitError}
        </Alert>
      )}

      <AppCard sx={{ p: 4 }}>
        <InspectionForm onSubmit={handleSubmit} />
      </AppCard>
    </Box>
  );
};

export default memo(InspectionCreatePage);
