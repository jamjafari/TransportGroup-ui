import React, { memo, useCallback, useState } from "react";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { useNavigate } from "react-router-dom";

import ExpenseTypeForm from "../components/ExpenseTypeForm";

import useExpenseType from "../hooks/useExpenseType";
import { AppCard } from "@/components";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const ExpenseTypeCreatePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { createExpenseType } = useExpenseType();

  const [submitError, setSubmitError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSubmitError(null);

        const createdId = await createExpenseType(values);

        navigate(`/expenseTypes`);
      } catch (error) {
        console.error("Create user error:", error);

        setSubmitError(error);
      }
    },
    [createExpenseType, navigate],
  );
  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("افزودن نوع هزینه")}
      </Typography>
      <AppCard sx={{ p: 4 }}>
        <FormSaveErrorProvider error={submitError}>
          <ExpenseTypeForm onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(ExpenseTypeCreatePage);
