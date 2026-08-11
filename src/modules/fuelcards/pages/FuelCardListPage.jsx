import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useFuelCard from '../hooks/useFuelCard';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const FuelCardListPage = () => {
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

  const columns = useMemo(
    () => [
      {
        field: 'cardNumber',
        headerName: '   شماره کارت سوخت',
        width: 130,
      },
      {
        field: 'plateNumber',
        headerName: '  پلاک خودرو',
        width: 130,
      },

      {
        field: 'expireDate',
        headerName: ' تاریخ اعتبار ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.licenseExpireDate),
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
                navigate(`/fuelCards/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/fuelCards/create')} sx={{ mb: 2 }}>
        افزودن کارت سوخت
      </AppButton>

      <AppDataGrid
        rows={fuelCards}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/fuelCards/${row.id}/edit`)}
        emptyTitle="کارت سوختی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف کارت سوخت"
        message={`آیا از حذف کارت سوخت «${deleteTarget?.firstName} ${deleteTarget?.lastName}» مطمئن هستید؟`}
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
