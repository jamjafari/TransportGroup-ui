import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useService from '../hooks/useService';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const ServiceListPage = () => {
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

  const columns = useMemo(
    () => [
      {
        field: 'plateNumber',
        headerName: 'پلاک خودرو',
        width: 120,
      },
      {
        field: 'vendorName',
        headerName: 'نام تامین کننده',
        width: 130,
      },
      {
        field: 'servicType',
        headerName: 'نوع سرویس',
        width: 130,
      },
      {
        field: 'odometerKM',
        headerName: ' کیلومتر خودرو',
        width: 140,
      },

      {
        field: 'serviceDate',
        headerName: 'تاریخ سرویس  ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.serviceDate),
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
                navigate(`/services/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/services/create')} sx={{ mb: 2 }}>
        سرویس جدید
      </AppButton>

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
        message={` مطمئن هستید؟   «${deleteTarget?.plateNumber}»  آیا از حذف سرویس`}
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
