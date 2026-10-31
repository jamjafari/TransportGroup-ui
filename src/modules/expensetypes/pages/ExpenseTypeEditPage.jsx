import React, { memo, useCallback, useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavigate, useParams } from "react-router-dom";

import ExpenseTypeForm from "../components/ExpenseTypeForm";

import { gregorianYearToJalali } from "@/utils";
import { AppCard } from "@/components";

import useExpenseType from "../hooks/useExpenseType";
import { useTranslation } from "react-i18next";
import { FormSaveErrorProvider } from "@/components/common/forms/FormSaveError";
const ExpenseTypeEditPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  const navigate = useNavigate();

  const { getExpenseTypeById, updateExpenseType } = useExpenseType();

  const [expenseType, setExpenseType] = useState(null);

  useEffect(() => {
    const loadExpenseType = async () => {
      const data = await getExpenseTypeById(id);

      setExpenseType({
        ...data,
      });
    };

    loadExpenseType();
  }, [id, getExpenseTypeById]);

  const [saveError, setSaveError] = useState(null);

  const handleSubmit = useCallback(
    async (values) => {
      try {
        setSaveError(null);

        await updateExpenseType(values);
        navigate("/expenseTypes");
      } catch (error) {
        setSaveError(error);
      }
    },
    [id, updateExpenseType, navigate],
  );

  if (!expenseType) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", py: 3 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        {t("ویرایش نوع هزینه")}
      </Typography>

      <AppCard sx={{ p: 4, mb: 3 }}>
        <FormSaveErrorProvider error={saveError}>
          <ExpenseTypeForm initialValues={expenseType} onSubmit={handleSubmit} />
        </FormSaveErrorProvider>
      </AppCard>
    </Box>
  );
};

export default memo(ExpenseTypeEditPage);
