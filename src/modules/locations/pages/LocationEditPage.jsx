import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import LocationForm from "../components/LocationForm";

import { gregorianYearToJalali } from "@/utils";
import { AppCard } from "@/components";

import useLocation from "../hooks/useLocation";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const LocationEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();

  const { getLocationById, updateLocation } = useLocation();

  const [location, setLocation] = useState(null);

  useEffect(() => {
    const loadLocation = async () => {
      const data = await getLocationById(id);

      setLocation({
        ...data,
      });
    };

    loadLocation();
  }, [id, getLocationById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateLocation(values);
        navigate("/locations");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateLocation, navigate],
  );

  if (!location) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش مکان")}
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FormSaveErrorProvider error={saveError}>
          <LocationForm initialValues={location} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(LocationEditPage);
