import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';
import { expenseTypeStatusChipKey } from '../constants';

import useExpenseType from '../hooks/useExpenseType';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const ExpenseTypeListPage = () => {
  const navigate = useNavigate();

  const { expenseTypes, loading, getExpenseTypes, deleteExpenseType } =
    useExpenseType();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getExpenseTypes();
  }, [getExpenseTypes]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteExpenseType(deleteTarget.id);
    setDeleteTarget(null);
    getExpenseTypes();
  }, [deleteTarget, deleteExpenseType, getExpenseTypes]);

  const columns = useMemo(
    () => [
      {
        field: 'code',
        headerName: '   کد انحصاری  ',
        width: 130,
      },
      {
        field: 'title',
        headerName: '  عنوان هزینه ',
        width: 130,
      },

      {
        field: 'isActive',
        headerName: ' فعال  ',
        width: 130,
        renderCell: ({ row }) => (
          <StatusChip status={expenseTypeStatusChipKey(row.isActive)} />
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
                navigate(`/expenseTypes/edit/${row.id}`);
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
        onClick={() => navigate('/expenseTypes/create')}
        sx={{ mb: 2 }}
      >
        افزودن نوع هزینه
      </AppButton>

      <AppDataGrid
        rows={expenseTypes}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/expenseTypes/edit/${row.id}`)}
        emptyTitle="نوع هزینه ای  ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف  نوع هزنه"
        message={`مطمئن هستید؟ «${deleteTarget?.title} »  آیا از حذف نوع هزینه`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(ExpenseTypeListPage);
