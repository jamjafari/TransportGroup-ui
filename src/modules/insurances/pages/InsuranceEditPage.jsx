import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import InsuranceForm from "../components/InsuranceForm";
import InsuranceDocumentSection from "../sections/InsuranceDocumentSection";

import { gregorianYearToJalali } from "@/utils";
import { AppCard } from "@/components";

import useInsurance from "../hooks/useInsurance";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const InsuranceEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();

  const { getInsuranceById, updateInsurance } = useInsurance();

  const [insurance, setInsurance] = useState(null);

  useEffect(() => {
    const loadInsurance = async () => {
      const data = await getInsuranceById(id);

      setInsurance({
        ...data,
        startDate: data.startDate ? new Date(data.startDate) : null,
        endDate: data.endDate ? new Date(data.endDate) : null,
        policyNumber: data.policyNumber ?? "",
        description: data.description ?? "",
        premiumAmount: data.premiumAmount ?? "",
        coverageAmount: data.coverageAmount ?? "",
        insuranceType: data.insuranceType ?? "",
        status: data.status ?? "",
      });
    };

    loadInsurance();
  }, [id, getInsuranceById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateInsurance(values);
        navigate("/insurances");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateInsurance, navigate],
  );

  if (!insurance) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش بیمه")}
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FormSaveErrorProvider error={saveError}>
          <InsuranceForm initialValues={insurance} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>

      <AppCard sx={{ p: 4 }}>
        <InsuranceDocumentSection insuranceId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(InsuranceEditPage);
