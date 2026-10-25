import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AppDataGrid } from "@/components";
import { AppButton, ConfirmDialog, StatusChip } from "@/components";
import { useTranslatedColumns } from "../../../../hooks";
import useVehicle from "../hooks/useVehicle";
import {
  vehicleStatusOptions,
  fuelTypeOptions,
  vehicleStatusChipKey,
} from "../constants";
import { gregorianYearToJalali, formatJalaliDate } from "@/utils";
import { useTranslation } from "react-i18next";
const VehicleListPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { vehicles, loading, getVehicles, deleteVehicle } = useVehicle();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getVehicles();
  }, [getVehicles]);

  const statusLabel = useCallback(
    (value) =>
      vehicleStatusOptions.find((option) => option.value === value)?.label ??
      "—",
    [],
  );

  const fuelTypeLabel = useCallback(
    (value) =>
      fuelTypeOptions.find((option) => option.value === value)?.label ?? "—",
    [],
  );

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteVehicle(deleteTarget.id);
    setDeleteTarget(null);
    getVehicles();
  }, [deleteTarget, deleteVehicle, getVehicles]);

  const baseColumns = useMemo(
    () => [
      { field: "plateNumber", headerName: "شماره پلاک", width: 140 },
      { field: "brand", headerName: "برند", width: 120 },
      { field: "model", headerName: "مدل", width: 120 },
      {
        field: "productionYear",
        headerName: "سال ساخت (شمسی)",
        width: 130,
        renderCell: ({ row }) => gregorianYearToJalali(row.productionYear),
      },
      {
        field: "purchaseDate",
        headerName: "تاریخ خرید",
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.purchaseDate),
      },
      {
        field: "fuelType",
        headerName: "نوع سوخت",
        width: 120,
        renderCell: ({ row }) => fuelTypeLabel(row.fuelType),
      },
      {
        field: "status",
        headerName: "وضعیت",
        width: 130,
        renderCell: ({ row }) => (
          <StatusChip status={vehicleStatusChipKey(row.status)} />
        ),
      },
      { field: "currentKM", headerName: "کارکرد (کیلومتر)", width: 140 },
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
                navigate(`/fleet/vehicles/edit/${row.id}`);
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
    [navigate, statusLabel, fuelTypeLabel],
  );
  const columns = useTranslatedColumns(baseColumns);

  return (
    <>
      <AppButton
        onClick={() => navigate("/fleet/vehicles/create")}
        sx={{ mb: 2 }}
        labelKey="افزودن خودرو"
      />

      <AppDataGrid
        rows={vehicles}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate("/fleet/vehicles/create")}
        emptyTitle="خودرویی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف خودرو"
        message={t('آیا از حذف {{entity}} «{{name}}» مطمئن هستید؟', {
          entity: t('خودرو'),
          name: deleteTarget?.plateNumber,
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

export default memo(VehicleListPage);
