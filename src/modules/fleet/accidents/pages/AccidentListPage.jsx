import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  AppDataGrid,
  AppButton,
  ConfirmDialog,
  StatusChip,
} from '@/components';
import { formatJalaliDate } from '@/utils';

import useAccident from '../hooks/useAccident';
import {
  accidentSeverityOptions,
  accidentStatusOptions,
  accidentStatusChipKey,
} from '../constants';

const AccidentListPage = () => {
  const navigate = useNavigate();
  const { accidents, loading, getAccidents, deleteAccident } = useAccident();
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getAccidents();
  }, [getAccidents]);

  const severityLabel = (value) =>
    accidentSeverityOptions.find((o) => o.value === value)?.label ?? value;
  const statusLabel = (value) =>
    accidentStatusOptions.find((o) => o.value === value)?.label ?? value;

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;
    await deleteAccident(deleteTarget.id);
    setDeleteTarget(null);
    getAccidents();
  }, [deleteTarget, deleteAccident, getAccidents]);

  const columns = useMemo(
    () => [
      { field: 'plateNumber', headerName: 'خودرو', width: 130 },
      { field: 'driverName', headerName: 'راننده', width: 150 },
      {
        field: 'accidentDate',
        headerName: 'تاریخ تصادف',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.accidentDate),
      },
      {
        field: 'severity',
        headerName: 'شدت',
        width: 110,
        renderCell: ({ row }) => severityLabel(row.severity),
      },
      {
        field: 'status',
        headerName: 'وضعیت',
        width: 130,
        renderCell: ({ row }) => (
          <StatusChip status={accidentStatusChipKey(row.status)} />
        ),
      },
      { field: 'missionCode', headerName: 'ماموریت', width: 120 },
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
                navigate(`/accidents/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/accidents/create')} sx={{ mb: 2 }}>
        ثبت تصادف
      </AppButton>

      <AppDataGrid
        rows={accidents}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/accidents/edit/${row.id}`)}
        emptyTitle="تصادفی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف رکورد تصادف"
        message={`آیا از حذف این رکورد مطمئن هستید؟`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(AccidentListPage);
