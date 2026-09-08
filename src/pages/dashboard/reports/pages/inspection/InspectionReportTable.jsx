import React, { useCallback } from 'react';

import { AppDataGrid, StatusChip, AttachmentsButton } from '@/components';

import { formatJalaliDate } from '@/utils';
import { INSPECTION_RESULT_OPTIONS } from '@/modules';
import { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';
import { getStatusLabel } from '@/utils/statusLabels'; // ✅ اضافه شد

const InspectionReportTable = ({ rows = [], loading }) => {
  const inspectionStatus = useCallback((value) => {
    switch (Number(value)) {
      case 1:
        return 'Active'; // قبول
      case 2:
        return 'Rejected'; // رد
      case 3:
        return 'Conditional'; // مشروط
      default:
        return 'Unknown';
    }
  }, []);
  const getComputedStatus = (row) => {
    if (Number(row.result) !== 1) {
      return 'Pending';
    }

    return row.computedStatus === 'Valid' ? 'Active' : row.computedStatus;
  };
  const columns = [
    { field: 'plateNumber', headerName: 'خودرو', flex: 1 },
    { field: 'vendorName', headerName: 'شرکت بیمه', flex: 1 },

    { field: 'certificateNumber', headerName: 'شماره بیمه‌نامه', flex: 1 },
    {
      field: 'expiryDate',
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
      field: 'result',
      headerName: 'تاییدیه ',
      flex: 1,

      renderCell: ({ row }) => (
        <StatusChip status={inspectionStatus(row.result)} />
      ),
    },
    {
      field: 'computedStatus',
      headerName: 'وضعیت',
      flex: 1,
      renderCell: ({ row }) => <StatusChip status={getComputedStatus(row)} />,
      valueFormatter: (value) => getStatusLabel(value), // ✅ اضافه شد — فقط برای Export
    },
    {
      field: 'attachments',
      headerName: 'مدارک',
      width: 90,
      renderCell: ({ row }) => (
        <AttachmentsButton
          ownerType={ATTACHMENT_OWNER_TYPE.INSPECTION}
          ownerId={row.id}
          title={`مدارک معاینه فنی — ${row.plateNumber}`}
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

export default InspectionReportTable;
