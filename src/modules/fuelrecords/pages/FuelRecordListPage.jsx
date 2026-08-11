import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useFuelRecord from '../hooks/useFuelRecord';
import { fuelTypeOptions, fuelTankStatusChipKey } from '../constants';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const FuelRecordListPage = () => {
  const navigate = useNavigate();

  const { fuelRecords, loading, getFuelRecords, deleteFuelRecord } =
    useFuelRecord();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getFuelRecords();
  }, [getFuelRecords]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteFuelRecord(deleteTarget.id);
    setDeleteTarget(null);
    getFuelRecords();
  }, [deleteTarget, deleteFuelRecord, getFuelRecords]);

  const columns = useMemo(
    () => [
      {
        field: 'plateNumber',
        headerName: ' پلاک خودرو  ',
        width: 130,
      },
      {
        field: 'driverName',
        headerName: ' نام راننده ',
        width: 130,
      },
      {
        field: 'odometerKM',
        headerName: ' کیلومتر خودرو ',
        width: 120,
      },
      {
        field: 'fuelType',
        headerName: 'نوع سوخت',
        width: 120,
        renderCell: ({ row }) => {
          const fuelType = fuelTypeOptions.find(
            (option) => option.value === Number(row.fuelType),
          );

          return fuelType?.label ?? '-';
        },
      },
      {
        field: 'fuelAmount',
        headerName: 'مقدار سوختگیری (لیتر) ',
        width: 130,
      },
      {
        field: 'unitPrice',
        headerName: 'قیمت هر واحد  ',
        width: 130,
      },
      {
        field: 'totalPrice',
        headerName: 'کل هزینه پرداختی ',
        width: 130,
      },
      {
        field: 'fuelCardNumber',
        headerName: 'شماره کارت سوخت ',
        width: 130,
      },
      {
        field: 'fuelStationName',
        headerName: 'ایستگاه سوختگیری ',
        width: 130,
      },

      {
        field: 'fuelDate',
        headerName: ' تاریخ سوختگیری ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.fuelDate),
      },
      {
        field: 'fullTank',
        headerName: 'آیا باک پر شده است؟',
        width: 150,
        renderCell: ({ row }) => (
          <StatusChip status={fuelTankStatusChipKey(row.fullTank)} />
        ),
      },
      {
        field: 'fileCount',
        headerName: ' تعداد الحاقات  ',
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
                navigate(`/fuelRecords/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/fuelRecords/create')} sx={{ mb: 2 }}>
        سوختگیری جدید
      </AppButton>

      <AppDataGrid
        rows={fuelRecords}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/fuelRecords/${row.id}/edit`)}
        emptyTitle="سوختگیرای ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف سوختگیری"
        message={`آیا از حذف سوختگیری «${deleteTarget?.fuelAmount} ${deleteTarget?.lastName}» مطمئن هستید؟`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(FuelRecordListPage);
