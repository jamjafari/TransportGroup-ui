import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import FuelCardForm from "../components/FuelCardForm";

import { gregorianYearToJalali } from "@/utils";
import { AppCard } from "@/components";

import useFuelCard from "../hooks/useFuelCard";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const FuelCardEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();

  const { getFuelCardById, updateFuelCard } = useFuelCard();

  const [fuelCard, setFuelCard] = useState(null);

  useEffect(() => {
    const loadFuelCard = async () => {
      const data = await getFuelCardById(id);

      setFuelCard({
        ...data,
      });
    };

    loadFuelCard();
  }, [id, getFuelCardById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateFuelCard(values);
        navigate("/fuelCards");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateFuelCard, navigate],
  );

  if (!fuelCard) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش کارت سوخت")}
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FormSaveErrorProvider error={saveError}>
          <FuelCardForm initialValues={fuelCard} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(FuelCardEditPage);
