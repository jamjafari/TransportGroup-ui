import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import ServiceTypeForm from "../components/ServiceTypeForm";

import { gregorianYearToJalali } from "@/utils";
import { AppCard } from "@/components";

import useServiceType from "../hooks/useServiceType";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const ServiceTypeEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();

  const { getServiceTypeById, updateServiceType } = useServiceType();

  const [serviceType, setServiceType] = useState(null);

  useEffect(() => {
    const loadServiceType = async () => {
      const data = await getServiceTypeById(id);

      setServiceType({
        ...data,
      });
    };

    loadServiceType();
  }, [id, getServiceTypeById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateServiceType(values);
        navigate("/serviceTypes");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateServiceType, navigate],
  );

  if (!serviceType) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش نوع سرویس")}
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FormSaveErrorProvider error={saveError}>
          <ServiceTypeForm initialValues={serviceType} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(ServiceTypeEditPage);
