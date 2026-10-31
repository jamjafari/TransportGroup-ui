import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import AccidentForm from "../components/AccidentForm";
import AccidentDocumentsSection from "../sections/AccidentDocumentsSection";
import useAccident from "../hooks/useAccident";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const AccidentEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { getAccidentById, updateAccident } = useAccident();

  const [accident, setAccident] = useState(null);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    getAccidentById(id).then((data) => {
      setAccident({
        ...data,
        accidentDate: data.accidentDate ? new Date(data.accidentDate) : null,
      });
    });
  }, [id, getAccidentById]);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError(null);
        await updateAccident({ ...values, id });
        navigate("/accidents");
      } catch (error) {
        setSubmitError(error);
      }
    },
    [id, updateAccident, navigate],
  );

  if (!accident) return null;

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش تصادف")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={submitError}>
          <AccidentForm initialValues={accident} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
      <AppCard sx={{ p: 4 }}>
        <AccidentDocumentsSection accidentId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(AccidentEditPage);
