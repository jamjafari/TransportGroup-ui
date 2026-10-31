import React, { memo, useCallback, useState } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import TireForm from "../components/TireForm";

import useTire from "../hooks/useTire";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const TireCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createTire } = useTire();
  const [submitError, setSubmitError] = useState(null);

  // const handleSubmit = useCallback(
  //   async (values) => {
  //     // console.log('Submit clicked');
  //     // console.log(values);
  //     try {
  //       const createdId = await createTire(values);
  //       navigate(`/tires`);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   },
  //   [createTire, navigate],
  // );
  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError(null);

        const createdId = await createTire(values);

        navigate(`/tires`);
      } catch (error) {
        console.error("Create user error:", error);

        setSubmitError(error);
      }
    },
    [createTire, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("افزودن تایر")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={submitError}>
          <TireForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(TireCreatePage);
