import React, { memo, useCallback, useState } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import VendorForm from "../components/VendorForm";

import useVendor from "../hooks/useVendor";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const VendorCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createVendor } = useVendor();

  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError(null);

        const createdId = await createVendor(values);

        navigate(`/vendors/edit/${createdId}`);
      } catch (error) {
        console.error("Create user error:", error);

        setSubmitError(error);
      }
    },
    [createVendor, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("افزودن تامین کننده")}
      </Typography>
      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={submitError}>
          <VendorForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(VendorCreatePage);
