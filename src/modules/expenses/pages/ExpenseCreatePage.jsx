import React, { useState, memo, useCallback } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import ExpenseForm from "../components/ExpenseForm";

import useExpense from "../hooks/useExpense";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const ExpenseCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createExpense } = useExpense();

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      console.log("Submit clicked");
      console.log(values);
      try {
        setSaveError(null);

        const createdId = await createExpense(values);
        navigate(`/expenses/edit/${createdId}`);
      } catch (error) {
        setSaveError(error);
      }
    },
    [createExpense, navigate],
  );

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("هزینه جدید")}
      </Typography>

      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={saveError}>
          <ExpenseForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(ExpenseCreatePage);
