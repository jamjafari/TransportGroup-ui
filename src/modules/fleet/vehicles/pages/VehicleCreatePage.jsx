import React, { useState, memo, useCallback } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import VehicleForm from "../components/VehicleForm";

import useVehicle from "../hooks/useVehicle";
import { AppCard, AppAlert } from "@/components";
import { usePlanLimits } from "@/hooks";
import { formatNumber } from "@/utils";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const VehicleCreatePage = () => {
  const { t } = useTranslation();
  const { canAddVehicle, tenant } = usePlanLimits();

  const navigate = useNavigate();
  const { createVehicle } = useVehicle();

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        const createdId = await createVehicle(values);
        navigate(`/fleet/vehicles/edit/${createdId}`);
      } catch (error) {
        setSaveError(error);
      }
    },
    [createVehicle, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("افزودن خودرو")}
      </Typography>

      {!canAddVehicle && (
        <AppAlert severity="warning" sx={{ mb: 3 }}>
          {t(
            "به سقف مجاز {{max}} خودرو در پلن فعلی رسیده‌اید. برای افزودن بیشتر، اشتراک خود را ارتقا دهید.",
            { max: formatNumber(tenant?.maxVehicles) },
          )}
        </AppAlert>
      )}

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={saveError}>
          <VehicleForm onSubmit={handleSubmit} disabled={!canAddVehicle} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(VehicleCreatePage);
