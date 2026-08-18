import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  AppDataGrid,
  AppButton,
  ConfirmDialog,
  StatusChip,
} from '@/components';

import useUser from '../hooks/useUser';
import ResetPasswordDialog from '../components/ResetPasswordDialog';

const UserListPage = () => {
  const navigate = useNavigate();
  const { users, loading, getUsers, deleteUser } = useUser();

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [resetTarget, setResetTarget] = useState(null);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;
    await deleteUser(deleteTarget.id);
    setDeleteTarget(null);
    getUsers();
  }, [deleteTarget, deleteUser, getUsers]);

  const columns = useMemo(
    () => [
      { field: 'userName', headerName: 'نام کاربری', width: 140 },
      { field: 'fullName', headerName: 'نام و نام‌خانوادگی', width: 180 },
      {
        field: 'roles',
        headerName: 'نقش‌ها',
        width: 200,
        renderCell: ({ row }) => (row.roles || []).join('، '),
      },
      {
        field: 'isActive',
        headerName: 'وضعیت',
        width: 120,
        renderCell: ({ row }) => (
          <StatusChip status={row.isActive ? 'Active' : 'Inactive'} />
        ),
      },
      {
        field: 'isLock',
        headerName: 'قفل',
        width: 100,
        renderCell: ({ row }) => (
          <StatusChip status={row.isLock ? 'error' : 'Active'} />
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
                navigate(`/admin/users/edit/${row.id}`);
              }}
            >
              ویرایش
            </AppButton>

            <AppButton
              size="small"
              color="warning"
              onClick={(e) => {
                e.stopPropagation();
                setResetTarget(row);
              }}
            >
              ریست رمز
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
      <AppButton onClick={() => navigate('/admin/users/create')} sx={{ mb: 2 }}>
        افزودن کاربر
      </AppButton>

      <AppDataGrid
        rows={users}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/admin/users/edit/${row.id}`)}
        emptyTitle="کاربری ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف کاربر"
        message={`مطمئن هستید؟ «${deleteTarget?.userName}» آیا از حذف کاربر`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />

      <ResetPasswordDialog
        open={!!resetTarget}
        user={resetTarget}
        onClose={() => setResetTarget(null)}
      />
    </>
  );
};

export default memo(UserListPage);
