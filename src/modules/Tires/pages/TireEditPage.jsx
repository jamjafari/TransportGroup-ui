import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import TireForm from "../components/TireForm";

import { gregorianYearToJalali } from "@/utils";
import { AppCard } from "@/components";

import useTire from "../hooks/useTire";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const TireEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();

  const { getTireById, updateTire } = useTire();

  const [tire, setTire] = useState(null);

  useEffect(() => {
    const loadTire = async () => {
      const data = await getTireById(id);

      setTire({
        ...data,

        purchaseDate: data.purchaseDate ? new Date(data.purchaseDate) : null,
      });
    };

    loadTire();
  }, [id, getTireById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateTire(values);
        navigate("/tires");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateTire, navigate],
  );

  if (!tire) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش تایر")}
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FormSaveErrorProvider error={saveError}>
          <TireForm initialValues={tire} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(TireEditPage);
