import React, { memo, useCallback, useEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import { AppDataGrid } from "@/components";
import { AppButton, ConfirmDialog, StatusChip } from "@/components";

import useServiceType from "../hooks/useServiceType";
import { gregorianYearToJalali, formatJalaliDate } from "@/utils";
import { useTranslatedColumns } from "@/hooks";
import { useTranslation } from "react-i18next";
const ServiceTypeListPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const { serviceTypes, loading, getServiceTypes, deleteServiceType } =
    useServiceType();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getServiceTypes();
  }, [getServiceTypes]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteServiceType(deleteTarget.id);
    setDeleteTarget(null);
    getServiceTypes();
  }, [deleteTarget, deleteServiceType, getServiceTypes]);

  const baseColumns = useMemo(
    () => [
      {
        field: "code",
        headerName: "کد",
        width: 130,
      },
      {
        field: "title",
        headerName: "عنوان سرویس",
        width: 130,
      },
      {
        field: "serviceIntervalKM",
        headerName: "سرویس دوره ای کیلومتر",
        width: 120,
      },
      {
        field: "serviceIntervalDays",
        headerName: "سرویس دوره ای روزانه",
        width: 130,
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
                navigate(`/serviceTypes/edit/${row.id}`);
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
        onClick={() => navigate("/serviceTypes/create")}
        sx={{ mb: 2 }}
        labelKey="افزودن نوع سرویس"
      />

      <AppDataGrid
        rows={serviceTypes}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/serviceTypes/edit/${row.id}`)}
        emptyTitle="سرویسی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف سرویس"
        message={t('آیا از حذف {{entity}} «{{name}}» مطمئن هستید؟', {
          entity: t('نوع سرویس'),
          name: deleteTarget?.title,
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

export default memo(ServiceTypeListPage);
