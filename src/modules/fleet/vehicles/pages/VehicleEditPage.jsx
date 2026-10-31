import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import VehicleForm from "../components/VehicleForm";
import VehicleDocumentsSection from "../sections/VehicleDocumentsSection";
import TireProvider from "../../../tires/context/TireProvider";
import TireAssignmentSection from "../../../tires/sections/TireAssignmentSection";
import DriverAssignmentSection from "../sections/DriverAssignmentSection";
import { DriverProvider } from "@/modules"; // مسیر واقعی رو با ساختار خودت تطبیق بده

import { gregorianYearToJalali } from "@/utils";
import { AppCard } from "@/components";

import useVehicle from "../hooks/useVehicle";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const VehicleEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();

  const { getVehicleById, updateVehicle } = useVehicle();

  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const loadVehicle = async () => {
      const data = await getVehicleById(id);

      setVehicle({
        ...data,
        productionYear: gregorianYearToJalali(data.productionYear),
        purchaseDate: data.purchaseDate ? new Date(data.purchaseDate) : null,
      });
    };

    loadVehicle();
  }, [id, getVehicleById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateVehicle(id, values);
        navigate("/fleet/vehicles");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateVehicle, navigate],
  );

  if (!vehicle) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش خودرو")}
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FormSaveErrorProvider error={saveError}>
          <VehicleForm initialValues={vehicle} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
      <AppCard sx={{ p: 4, mb: 3 }}>
        <DriverProvider>
          <DriverAssignmentSection vehicleId={id} />
        </DriverProvider>
      </AppCard>
      <AppCard sx={{ p: 4 }}>
        <VehicleDocumentsSection vehicleId={id} />
      </AppCard>
      <AppCard sx={{ p: 4 }}>
        <TireProvider>
          <TireAssignmentSection vehicleId={id} />
        </TireProvider>
      </AppCard>
    </Box>
  );
};

export default memo(VehicleEditPage);
