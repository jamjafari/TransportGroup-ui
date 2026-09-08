import React, { useCallback } from 'react';

import { AppDataGrid, StatusChip, AttachmentsButton } from '@/components';

import { formatJalaliDate } from '@/utils';
import { insuranceTypeOptions } from '@/modules';
import { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';
import { getStatusLabel } from '@/utils/statusLabels'; // ✅ اضافه شد

const InsuranceReportTable = ({ rows = [], loading }) => {
  const insuranceLabel = useCallback(
    (value) =>
      insuranceTypeOptions.find((option) => option.value === value)?.label ??
      '—',
    [],
  );
  const columns = [
    { field: 'plateNumber', headerName: 'خودرو', flex: 1 },
    { field: 'vendorName', headerName: 'شرکت بیمه', flex: 1 },
    {
      field: 'insuranceType',
      headerName: 'نوع بیمه',
      flex: 1,
      renderCell: ({ row }) => insuranceLabel(row.insuranceType),
    },
    { field: 'policyNumber', headerName: 'شماره بیمه‌نامه', flex: 1 },
    {
      field: 'endDate',
      headerName: 'تاریخ انقضا',
      flex: 1,
      renderCell: ({ value }) => formatJalaliDate(value),
    },
    {
      field: 'remainingDays',
      headerName: 'روز باقی‌مانده',
      flex: 1,
      renderCell: ({ value }) =>
        value < 0 ? `${Math.abs(value)} روز پیش` : `${value} روز`,
    },
    {
      field: 'computedStatus',
      headerName: 'وضعیت',
      flex: 1,
      renderCell: ({ row }) => (
        <StatusChip
          status={
            row.computedStatus === 'Valid' ? 'Success' : row.computedStatus
          }
        />
      ),
      valueFormatter: (value) => getStatusLabel(value), // ✅ اضافه شد — فقط برای Export
    },
    {
      field: 'attachments',
      headerName: 'مدارک',
      width: 90,
      renderCell: ({ row }) => (
        <AttachmentsButton
          ownerType={ATTACHMENT_OWNER_TYPE.INSURANCE}
          ownerId={row.id}
          title={`مدارک بیمه — ${row.insuranceType}`}
        />
      ),
    },
  ];

  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      pagination
      initialPageSize={10}
      filterable
      rowSelection
      toolbar
      sortable
      initialSortField="remainingDays"
      initialSortDirection="asc"
      stickyHeader
    />
  );
};

export default InsuranceReportTable;
