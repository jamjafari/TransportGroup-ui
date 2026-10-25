import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AppDataGrid } from "@/components";
import { AppButton, ConfirmDialog, StatusChip } from "@/components";
import { useTranslatedColumns } from "../../../hooks";
import useFuelCard from "../hooks/useFuelCard";
import { gregorianYearToJalali, formatJalaliDate } from "@/utils";
import { useTranslation } from "react-i18next";
const FuelCardListPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { fuelCards, loading, getFuelCards, deleteFuelCard } = useFuelCard();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getFuelCards();
  }, [getFuelCards]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteFuelCard(deleteTarget.id);
    setDeleteTarget(null);
    getFuelCards();
  }, [deleteTarget, deleteFuelCard, getFuelCards]);

  const baseColumns = useMemo(
    () => [
      {
        field: "cardNumber",
        headerName: "شماره کارت سوخت",
        width: 130,
      },
      {
        field: "plateNumber",
        headerName: "پلاک خودرو",
        width: 130,
      },

      {
        field: "expireDate",
        headerName: "تاریخ اعتبار",
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.expireDate),
      },

      {
        field: "actions",
        headerName: "عملیات",
        width: 140,
        renderCell: ({ row }) => (
          <>
            <AppButton
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/fuelCards/edit/${row.id}`);
              }}
              labelKey="ویرایش"
            />

            <AppButton
              size="small"
              color="error"
              onClick={(event) => {
                event.stopPropagation();
                setDeleteTarget(row);
              }}
              labelKey="حذف"
            />
          </>
        ),
      },
    ],
    [navigate],
  );
  const columns = useTranslatedColumns(baseColumns);

  return (
    <>
      <AppButton
        onClick={() => navigate("/fuelCards/create")}
        sx={{ mb: 2 }}
        labelKey="افزودن کارت سوخت"
      />

      <AppDataGrid
        rows={fuelCards}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/fuelCards/edit/${row.id}`)}
        emptyTitle="کارت سوختی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف کارت سوخت"
        message={t('آیا از حذف {{entity}} «{{name}}» مطمئن هستید؟', {
          entity: t('کارت سوخت'),
          name: deleteTarget?.cardNumber,
        })}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(FuelCardListPage);
