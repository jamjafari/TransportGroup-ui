import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useLocation from '../hooks/useLocation';
const LocationListPage = () => {
  const navigate = useNavigate();

  const { locations, loading, getLocations, deleteLocation } = useLocation();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getLocations();
  }, [getLocations]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteLocation(deleteTarget.id);
    setDeleteTarget(null);
    getLocations();
  }, [deleteTarget, deleteLocation, getLocations]);

  const columns = useMemo(
    () => [
      {
        field: 'name',
        headerName: 'نام مکان  ',
        width: 130,
      },
      {
        field: 'code',
        headerName: ' کد مکان',
        width: 120,
      },
      {
        field: 'address',
        headerName: ' آدرس ',
        width: 120,
      },
      {
        field: 'latitude',
        headerName: 'عرض جغرافیایی ',
        width: 120,
      },
      { field: 'longitude', headerName: '   طول جغرافیایی', width: 140 },
      {
        field: 'description',
        headerName: '  توضیحات ',
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
                navigate(`/locations/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/locations/create')} sx={{ mb: 2 }}>
        افزودن مکان
      </AppButton>

      <AppDataGrid
        rows={locations}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/locations/${row.id}/edit`)}
        emptyTitle="مکانی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف مکان"
        message={`آیا از حذف مکان «${deleteTarget?.name} ${deleteTarget?.lastName}» مطمئن هستید؟`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(LocationListPage);
