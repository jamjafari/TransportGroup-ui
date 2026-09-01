import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import {
  AppDataGrid,
  AppButton,
  ConfirmDialog,
  StatusChip,
} from '@/components';

import useTenant from '../hooks/useTenant';
import AddTenantAdminDialog from '../components/AddTenantAdminDialog';

const TenantListPage = () => {
  const navigate = useNavigate();
  const { tenants, loading, getTenants, deleteTenant } = useTenant();

  const [deleteTarget, setDeleteTarget] = useState(null);
  const [adminTarget, setAdminTarget] = useState(null);

  useEffect(() => {
    getTenants();
  }, [getTenants]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;
    await deleteTenant(deleteTarget.id);
    setDeleteTarget(null);
    getTenants();
  }, [deleteTarget, deleteTenant, getTenants]);

  const columns = useMemo(
    () => [
      { field: 'name', headerName: 'نام سازمان', width: 200 },
      { field: 'slug', headerName: 'Slug', width: 130 },
      { field: 'subscriptionPlan', headerName: 'پلن', width: 110 },
      {
        field: 'currentVehicleCount',
        headerName: 'خودرو',
        width: 100,
        renderCell: ({ row }) =>
          `${row.currentVehicleCount} / ${row.maxVehicles ?? '∞'}`,
      },
      {
        field: 'currentUserCount',
        headerName: 'کاربر',
        width: 100,
        renderCell: ({ row }) =>
          `${row.currentUserCount} / ${row.maxUsers ?? '∞'}`,
      },
      {
        field: 'isActive',
        headerName: 'وضعیت',
        width: 110,
        renderCell: ({ row }) => (
          <StatusChip status={row.isActive ? 'Active' : 'Inactive'} />
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
                navigate(`/admin/tenants/edit/${row.id}`);
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
      <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
        <AppButton onClick={() => navigate('/admin/tenants/create')}>
          افزودن سازمان
        </AppButton>

        <AppButton
          variant="outlined"
          onClick={() => navigate('/admin/tenants/admins')}
        >
          مشاهده‌ی ادمین‌های سازمان‌ها
        </AppButton>
      </Box>

      <AppDataGrid
        rows={tenants}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/admin/tenants/edit/${row.id}`)}
        emptyTitle="سازمانی ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف سازمان"
        message={`مطمئن هستید؟ آیا از حذف سازمان «${deleteTarget?.name}»`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />

      <AddTenantAdminDialog
        open={!!adminTarget}
        tenant={adminTarget}
        onClose={() => setAdminTarget(null)}
      />
    </>
  );
};

export default memo(TenantListPage);
