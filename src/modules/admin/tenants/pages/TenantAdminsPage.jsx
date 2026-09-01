import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import {
  AppDataGrid,
  AppButton,
  ConfirmDialog,
  StatusChip,
} from '@/components';

import useTenant from '../hooks/useTenant';

const TenantAdminsPage = () => {
  const { admins, loading, getTenantAdmins, setAdminStatus, deleteAdmin } =
    useTenant();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getTenantAdmins();
  }, [getTenantAdmins]);

  const handleToggleActive = useCallback(
    async (row) => {
      await setAdminStatus(row.id, !row.isActive);
      getTenantAdmins();
    },
    [setAdminStatus, getTenantAdmins],
  );

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;
    await deleteAdmin(deleteTarget.id);
    setDeleteTarget(null);
    getTenantAdmins();
  }, [deleteTarget, deleteAdmin, getTenantAdmins]);

  const columns = useMemo(
    () => [
      { field: 'tenantName', headerName: 'سازمان', width: 200 },
      { field: 'userName', headerName: 'نام کاربری', width: 150 },
      { field: 'fullName', headerName: 'نام و نام‌خانوادگی', width: 180 },
      {
        field: 'isActive',
        headerName: 'وضعیت',
        width: 110,
        renderCell: ({ row }) => (
          <StatusChip status={row.isActive ? 'Active' : 'Inactive'} />
        ),
      },
      {
        field: 'isLocked',
        headerName: 'قفل',
        width: 100,
        renderCell: ({ row }) => (
          <StatusChip status={row.isLocked ? 'error' : 'Active'} />
        ),
      },
      {
        field: 'actions',
        headerName: 'عملیات',
        width: 220,
        renderCell: ({ row }) => (
          <>
            <AppButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                handleToggleActive(row);
              }}
            >
              {row.isActive ? 'غیرفعال کردن' : 'فعال کردن'}
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
    [handleToggleActive],
  );

  return (
    <>
      <AppDataGrid
        rows={admins}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        emptyTitle="هیچ ادمینی برای سازمان‌ها ساخته نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف ادمین"
        message={`مطمئن هستید؟ آیا از حذف ادمین «${deleteTarget?.userName}»`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(TenantAdminsPage);
