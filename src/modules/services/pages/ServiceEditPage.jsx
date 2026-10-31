import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import ServiceForm from "../components/ServiceForm";
import ServiceDocumentsSection from "../sections/ServiceDocumentsSection";

import { gregorianYearToJalali } from "@/utils";
import { AppCard } from "@/components";

import useService from "../hooks/useService";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const ServiceEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();

  const { getServiceById, updateService } = useService();

  const [service, setService] = useState(null);

  useEffect(() => {
    const loadService = async () => {
      const data = await getServiceById(id);

      setService({
        ...data,
        serviceDate: data.serviceDate ? new Date(data.serviceDate) : null,

        odometerKM: data.odometerKM ?? "",
      });
    };

    loadService();
  }, [id, getServiceById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateService(values);
        navigate("/services");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateService, navigate],
  );

  if (!service) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش سرویس خودرو")}
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FormSaveErrorProvider error={saveError}>
          <ServiceForm initialValues={service} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>

      <AppCard sx={{ p: 4 }}>
        <ServiceDocumentsSection serviceId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(ServiceEditPage);
