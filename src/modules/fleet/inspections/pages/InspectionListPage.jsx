import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  AppDataGrid,
  AppButton,
  ConfirmDialog,
  StatusChip,
} from '@/components';
import { formatJalaliDate } from '@/utils';

import useInspection from '../hooks/useInspection';
import { inspectionResultChipKey } from '../constants';

const InspectionListPage = () => {
  const navigate = useNavigate();
  const { inspections, loading, getInspections, deleteInspection } =
    useInspection();
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getInspections();
  }, [getInspections]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;
    await deleteInspection(deleteTarget.id);
    setDeleteTarget(null);
    getInspections();
  }, [deleteTarget, deleteInspection, getInspections]);

  const columns = useMemo(
    () => [
      { field: 'plateNumber', headerName: 'خودرو', width: 140 },
      { field: 'vendorName', headerName: 'مرکز معاینه', width: 160 },
      {
        field: 'inspectionDate',
        headerName: 'تاریخ انجام',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.inspectionDate),
      },
      {
        field: 'expiryDate',
        headerName: 'تاریخ انقضا',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.expiryDate),
      },
      {
        field: 'result',
        headerName: 'نتیجه',
        width: 120,
        renderCell: ({ row }) => (
          <StatusChip status={inspectionResultChipKey(row.result)} />
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
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/inspections/edit/${row.id}`);
              }}
            >
              ویرایش
            </AppButton>
            <AppButton
              size="small"
              color="error"
              onClick={(e) => {
                e.stopPropagation();
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
      <AppButton onClick={() => navigate('/inspections/create')} sx={{ mb: 2 }}>
        ثبت معاینه فنی
      </AppButton>

      <AppDataGrid
        rows={inspections}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/inspections/edit/${row.id}`)}
        emptyTitle="معاینه فنی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف رکورد معاینه فنی"
        message={`مطمئن هستید؟ « ${deleteTarget?.plateNumber}» آیا از حذف رکورد پلاک خودرو `}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(InspectionListPage);
