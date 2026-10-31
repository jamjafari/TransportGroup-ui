import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import ExpenseForm from "../components/ExpenseForm";
import ExpenseDocumentSection from "../sections/ExpenseDocumentSection";

import { gregorianYearToJalali } from "@/utils";
import { AppCard } from "@/components";

import useExpense from "../hooks/useExpense";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const ExpenseEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();

  const { getExpenseById, updateExpense } = useExpense();

  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const loadExpense = async () => {
      const data = await getExpenseById(id);

      setExpense({
        ...data,
        expenseDate: data.expenseDate ? new Date(data.expenseDate) : null,
      });
    };

    loadExpense();
  }, [id, getExpenseById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateExpense(values);
        navigate("/expenses");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateExpense, navigate],
  );

  if (!expense) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش هزینه")}
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FormSaveErrorProvider error={saveError}>
          <ExpenseForm initialValues={expense} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>

      <AppCard sx={{ p: 4 }}>
        <ExpenseDocumentSection expenseId={id} />
      </AppCard>
    </Box>
  );
};

export default memo(ExpenseEditPage);
