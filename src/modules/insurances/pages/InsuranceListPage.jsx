import React, { memo, useCallback, useEffect, useMemo, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AppDataGrid } from '@/components';
import { AppButton, ConfirmDialog, StatusChip } from '@/components';

import useInsurance from '../hooks/useInsurance';
import { statusTypeOptions } from '../constants';
import { insuranceTypeOptions } from '../constants';

//import { insuranceStatusChipKey } from '../constants';
import { gregorianYearToJalali, formatJalaliDate } from '@/utils';
const InsuranceListPage = () => {
  const navigate = useNavigate();

  const { insurances, loading, getInsurances, deleteInsurance } =
    useInsurance();

  const [deleteTarget, setDeleteTarget] = useState(null);
  const statusLabel = useCallback(
    (value) =>
      statusTypeOptions.find((option) => option.value === value)?.label ?? '—',
    [],
  );
  const insuranceLabel = useCallback(
    (value) =>
      insuranceTypeOptions.find((option) => option.value === value)?.label ??
      '—',
    [],
  );
  useEffect(() => {
    getInsurances();
  }, [getInsurances]);

  const handleDeleteConfirm = useCallback(async () => {
    if (!deleteTarget) return;

    await deleteInsurance(deleteTarget.id);
    setDeleteTarget(null);
    getInsurances();
  }, [deleteTarget, deleteInsurance, getInsurances]);

  const columns = useMemo(
    () => [
      {
        field: 'plateNumber',
        headerName: 'پلاک خودرو',
        width: 130,
      },
      {
        field: 'insuranceType',
        headerName: '  نوع بیمه',
        width: 130,
        renderCell: ({ row }) => insuranceLabel(row.insuranceType),
      },
      {
        field: 'policyNumber',
        headerName: ' شماره بیمه',
        width: 120,
      },
      {
        field: 'vendorName',
        headerName: 'شرکت بیمه کننده  ',
        width: 130,
      },
      {
        field: 'premiumAmount',
        headerName: ' مبلغ حق بیمه',
        width: 140,
      },
      {
        field: 'coverageAmount',
        headerName: 'سقف تعهد بیمه',
        width: 140,
      },
      {
        field: 'startDate',
        headerName: ' تاریخ شروع ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.startDate),
      },
      {
        field: 'endDate',
        headerName: ' تاریخ پایان ',
        width: 130,
        renderCell: ({ row }) => formatJalaliDate(row.endDate),
      },
      {
        field: 'status',
        headerName: 'وضعیت',
        width: 140,
        renderCell: ({ row }) => statusLabel(row.status),
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
                navigate(`/insurances/edit/${row.id}`);
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
      <AppButton onClick={() => navigate('/insurances/create')} sx={{ mb: 2 }}>
        بیمه جدید
      </AppButton>

      <AppDataGrid
        rows={insurances}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        onRowClick={(row) => navigate(`/insurances/edit/${row.id}`)}
        emptyTitle="بیمه ای ثبت نشده است"
      />

      <ConfirmDialog
        open={!!deleteTarget}
        title="حذف بیمه"
        message={`مطمئن هستید؟ « ${deleteTarget?.policyNumber}» آیا از حذف بیمه `}
        confirmText="حذف"
        cancelText="انصراف"
        severity="error"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTarget(null)}
      />
    </>
  );
};

export default memo(InsuranceListPage);
