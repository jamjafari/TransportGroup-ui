import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useMission from '../hooks/useMission';
import { missionStatusOptions } from '../constants';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const MissionListPage = () => {
  const navigate = useNavigate();

  const { missions, loading, getMissions, deleteMission } = useMission();

  const [deleteTarget, setDeleteTarget] = useState(null);
  const missionLabel = useCallback(
    (value) =>
      missionStatusOptions.find((option) => option.value === value)?.label ??
      '—',
    [],
  );
  useEffect(() => {
    getMissions();
  }, [getMissions]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteMission(deleteTarget.id);
    setDeleteTarget(null);
    getMissions();
  }, [deleteTarget, deleteMission, getMissions]);

  const columns = useMemo(
    () => [
      {
        field: 'missionCode',
        headerName: ' کد ماموریت',
        width: 130,
      },
      {
        field: 'vehicleName',
        headerName: 'پلاک خودرو',
        width: 120,
      },
      {
        field: 'driverName',
        headerName: 'نام راننده',
        width: 130,
      },
      {
        field: 'originLocationName',
        headerName: ' مبدا',
        width: 140,
      },
      {
        field: 'destinationLocationName',
        headerName: ' مقصد  ',
        width: 130,
      },

      {
        field: 'startDate',
        headerName: 'تاریخ شروع  ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.startDate),
      },
      {
        field: 'endtDate',
        headerName: 'تاریخ پایان  ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.endDate),
      },
      {
        field: 'startTime',
        headerName: 'ساعت شروع  ',
        width: 130,
      },
      {
        field: 'endTime',
        headerName: 'ساعت پایان  ',
        width: 130,
      },
      {
        field: 'startOdometerKm',
        headerName: 'کیلومتر خودرو در شروع  ',
        width: 130,
      },
      {
        field: 'endOdometerKm',
        headerName: 'کیلومتر خودرو در پایان  ',
        width: 130,
      },
      {
        field: 'distanceKm',
        headerName: 'مسافت مبدا از مقصد (KM)',
        width: 130,
      },

      {
        field: 'status',
        headerName: 'وضعیت ماموریت',
        width: 120,
        renderCell: ({ row }) => missionLabel(row.status),
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
                navigate(`/missions/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/missions/create')} sx={{ mb: 2 }}>
        ماموریت جدید
      </AppButton>

      <AppDataGrid
        rows={missions}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/missions/edit/${row.id}`)}
        emptyTitle="ماموریتی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف ماموریت"
        message={` مطمئن هستید؟   «${deleteTarget?.missionCode}»  آیا از حذف ماموریت`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(MissionListPage);
