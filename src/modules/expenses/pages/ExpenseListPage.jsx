import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useExpense from '../hooks/useExpense';
//import { expenseStatusChipKey } from '../constants';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const ExpenseListPage = () => {
  const navigate = useNavigate();

  const { expenses, loading, getExpenses, deleteExpense } = useExpense();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getExpenses();
  }, [getExpenses]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteExpense(deleteTarget.id);
    setDeleteTarget(null);
    getExpenses();
  }, [deleteTarget, deleteExpense, getExpenses]);

  const columns = useMemo(
    () => [
      {
        field: 'vehiclePlateNumber',
        headerName: 'پلاک خودرو',
        width: 130,
      },
      {
        field: 'expensTypeName',
        headerName: '  نوع هزینه',
        width: 130,
      },
      {
        field: 'amount',
        headerName: '  مقدار هزینه (تومان)',
        width: 120,
      },
      {
        field: 'invoiceNumber',
        headerName: 'شماره فاکتور ',
        width: 130,
      },
      {
        field: 'vendorName',
        headerName: '  نام  تعمیرگاه  یا مغازه',
        width: 140,
      },
      {
        field: 'expenseDate',
        headerName: ' تاریخ هزینه ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.expenseDate),
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
                navigate(`/expenses/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/expenses/create')} sx={{ mb: 2 }}>
        هزینه جدید
      </AppButton>

      <AppDataGrid
        rows={expenses}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/expenses/${row.id}/edit`)}
        emptyTitle="هزینه ای ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف هزینه"
        message={`آیا از حذف هزینه «${deleteTarget?.firstName} ${deleteTarget?.invoiceNumber}» مطمئن هستید؟`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(ExpenseListPage);
