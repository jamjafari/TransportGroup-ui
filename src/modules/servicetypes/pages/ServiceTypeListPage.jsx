import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useServiceType from '../hooks/useServiceType';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const ServiceTypeListPage = () => {
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

  const columns = useMemo(
    () => [
      {
        field: 'code',
        headerName: ' کد ',
        width: 130,
      },
      {
        field: 'title',
        headerName: ' عنوان سرویس ',
        width: 130,
      },
      {
        field: 'serviceIntervalKM',
        headerName: ' سرویس دوره ای کیلومتر ',
        width: 120,
      },
      {
        field: 'serviceIntervalDays',
        headerName: 'سرویس دوره ای روزانه ',
        width: 130,
      },

      {
        field: 'actions',
        headerName: 'عملیات',
        width: 140,
        renderCell: ({ row }) => (
          <>
            <AppButton
              size="small"
              onClick={(event) => {
                event.stopPropagation();
                navigate(`/serviceTypes/edit/${row.id}`);
              }}
            >
              ویرایش
            </AppButton>

            <AppButton
              size="small"
              color="error"
              onClick={(event) => {
                event.stopPropagation();
                setDeleteTarget(row);
              }}
            >
              حذف
            </AppButton>
          </>
        ),
      },
    ],
    [navigate],
  );

  return (
    <>
      <AppButton
        onClick={() => navigate('/serviceTypes/create')}
        sx={{ mb: 2 }}
      >
        افزودن نوع سرویس
      </AppButton>

      <AppDataGrid
        rows={serviceTypes}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/serviceTypes/${row.id}/edit`)}
        emptyTitle="سرویسی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف سرویس"
        message={`آیا از حذف سرویس «${deleteTarget?.title} » مطمئن هستید؟`}
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
