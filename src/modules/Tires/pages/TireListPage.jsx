import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useTire from '../hooks/useTire';
import { tireStatusChipKey } from '../constants';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const TireListPage = () => {
  const navigate = useNavigate();

  const { tires, loading, getTires, deleteTire } = useTire();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getTires();
  }, [getTires]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteTire(deleteTarget.id);
    setDeleteTarget(null);
    getTires();
  }, [deleteTarget, deleteTire, getTires]);

  const columns = useMemo(
    () => [
      {
        field: 'brand',
        headerName: '   برند  ',
        width: 130,
      },
      {
        field: 'model',
        headerName: ' مدل ',
        width: 130,
      },
      {
        field: 'serialNumber',
        headerName: '  شماره سریال',
        width: 120,
      },
      {
        field: 'size',
        headerName: 'اندازه ',
        width: 130,
      },
      {
        field: 'purchaseDate',
        headerName: ' تاریخ خرید ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.purchaseDate),
      },

      { field: 'purchasePrice', headerName: 'هزینه خرید', width: 120 },
      {
        field: 'isActive',
        headerName: 'فعال',
        width: 120,
        renderCell: ({ row }) => (
          <StatusChip status={tireStatusChipKey(row.isActive)} />
        ),
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
                navigate(`/tires/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/tires/create')} sx={{ mb: 2 }}>
        افزودن تایر
      </AppButton>

      <AppDataGrid
        rows={tires}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/tires/${row.id}/edit`)}
        emptyTitle="تایر ای ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف تایر"
        message={`آیا از حذف تایر «${deleteTarget?.model} » مطمئن هستید؟`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(TireListPage);
