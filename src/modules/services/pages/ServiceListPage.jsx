import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AppDataGrid } from "@/components";
import { AppButton, ConfirmDialog, StatusChip } from "@/components";

import useService from "../hooks/useService";
import { gregorianYearToJalali, formatJalaliDate } from "@/utils";
import { useTranslatedColumns } from "@/hooks";
import { useTranslation } from "react-i18next";
const ServiceListPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { services, loading, getServices, deleteService } = useService();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getServices();
  }, [getServices]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteService(deleteTarget.id);
    setDeleteTarget(null);
    getServices();
  }, [deleteTarget, deleteService, getServices]);

  const baseColumns = useMemo(
    () => [
      {
        field: "plateNumber",
        headerName: "پلاک خودرو",
        width: 120,
      },
      {
        field: "vendorName",
        headerName: "نام تامین کننده",
        width: 130,
      },
      {
        field: "servicType",
        headerName: "نوع سرویس",
        width: 130,
      },
      {
        field: "odometerKM",
        headerName: "کیلومتر خودرو",
        width: 140,
      },

      {
        field: "serviceDate",
        headerName: "تاریخ سرویس",
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.serviceDate),
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
                navigate(`/services/edit/${row.id}`);
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

  // ✅ عنوان ستون‌ها ترجمه می‌شود (متن فارسی خودش کلید ترجمه است)
  const columns = useTranslatedColumns(baseColumns);

  return (
    <>
      <AppButton
        onClick={() => navigate("/services/create")}
        sx={{ mb: 2 }}
        labelKey="سرویس جدید"
      />

      <AppDataGrid
        rows={services}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/services/edit/${row.id}`)}
        emptyTitle="سرویسی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف سرویس"
        message={t('آیا از حذف {{entity}} «{{name}}» مطمئن هستید؟', {
          entity: t('سرویس'),
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

export default memo(ServiceListPage);
