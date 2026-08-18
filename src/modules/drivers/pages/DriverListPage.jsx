import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useDriver from '../hooks/useDriver';
import { driverStatusChipKey } from '../constants';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const DriverListPage = () => {
  const navigate = useNavigate();

  const { drivers, loading, getDrivers, deleteDriver } = useDriver();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getDrivers();
  }, [getDrivers]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteDriver(deleteTarget.id);
    setDeleteTarget(null);
    getDrivers();
  }, [deleteTarget, deleteDriver, getDrivers]);

  const columns = useMemo(
    () => [
      {
        field: 'fullName',
        headerName: '  نام و نام خانوادگی',
        width: 130,
        renderCell: ({ row }) => `${row.firstName} ${row.lastName}`,
      },
      {
        field: 'nationalCode',
        headerName: ' کد ملی',
        width: 130,
      },
      {
        field: 'mobileNumber',
        headerName: ' شماره موبایل',
        width: 120,
      },
      {
        field: 'personnelCode',
        headerName: 'کد پرسنلی',
        width: 130,
      },
      { field: 'licenseNumber', headerName: ' شماره گواهی نامه', width: 140 },
      {
        field: 'licenseExpireDate',
        headerName: ' تاریخ اعتبار ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.licenseExpireDate),
      },
      {
        field: 'isActive',
        headerName: 'فعال',
        width: 120,
        renderCell: ({ row }) => (
          <StatusChip status={driverStatusChipKey(row.isActive)} />
        ),
      },
      { field: 'description', headerName: 'توضیحات', width: 120 },
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
                navigate(`/drivers/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/drivers/create')} sx={{ mb: 2 }}>
        افزودن راننده
      </AppButton>

      <AppDataGrid
        rows={drivers}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/drivers/edit/${row.id}`)}
        emptyTitle="راننده ای ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف راننده"
        message={`مطمئن هستید؟ «${deleteTarget?.firstName} ${deleteTarget?.lastName}» آیا از حذف راننده `}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(DriverListPage);
