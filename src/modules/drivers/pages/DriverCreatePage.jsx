import React, { memo, useCallback, useState } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import DriverForm from "../components/DriverForm";

import useDriver from "../hooks/useDriver";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";

const DriverCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createDriver } = useDriver();

  const [submitError, setSubmitError] = useState(null);
  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError(null);

        const createdId = await createDriver(values);

        navigate(`/drivers/edit/${createdId}`);
      } catch (error) {
        console.error("Create user error:", error);

        setSubmitError(error);
      }
    },
    [createDriver, navigate],
  );
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("افزودن راننده")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={submitError}>
          <DriverForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(DriverCreatePage);
