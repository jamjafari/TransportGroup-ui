import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useVendor from '../hooks/useVendor';
import { attachmentCategoryOptions } from '../constants';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const VendorListPage = () => {
  const navigate = useNavigate();

  const { vendors, loading, getVendors, deleteVendor } = useVendor();

  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    getVendors();
  }, [getVendors]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteVendor(deleteTarget.id);
    setDeleteTarget(null);
    getVendors();
  }, [deleteTarget, deleteVendor, getVendors]);
  const vendorTypeLabel = useCallback(
    (value) =>
      attachmentCategoryOptions.find((option) => option.value === value)
        ?.label ?? '—',
    [],
  );
  const columns = useMemo(
    () => [
      {
        field: 'vendorName',
        headerName: ' نام تامین کننده  ',
        width: 130,
      },
      {
        field: 'vendorCode',
        headerName: ' کد تامین کننده',
        width: 130,
      },
      {
        field: 'mobileNumber',
        headerName: ' شماره موبایل',
        width: 120,
      },
      {
        field: 'mobileNumber',
        headerName: ' شماره موبایل',
        width: 120,
        renderCell: ({ row }) => vendorTypeLabel(row.vendorType),
      },
      {
        field: 'contactPerson',
        headerName: 'شخص مرتبط ',
        width: 130,
      },

      {
        field: 'phoneNumber',
        headerName: ' شماره تلفن  ',
        width: 130,
      },
      {
        field: 'email',
        headerName: 'ایمیل',
        width: 120,
      },
      { field: 'addess', headerName: 'آدرس', width: 150 },
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
                navigate(`/vendors/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/vendors/create')} sx={{ mb: 2 }}>
        افزودن تامین کننده جدید
      </AppButton>

      <AppDataGrid
        rows={vendors}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/vendors/${row.id}/edit`)}
        emptyTitle="تامین کننده ای ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف تامین کننده"
        message={`آیا از حذف تامین کننده «${deleteTarget?.vendorName} ${deleteTarget?.lastName}» مطمئن هستید؟`}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(VendorListPage);
