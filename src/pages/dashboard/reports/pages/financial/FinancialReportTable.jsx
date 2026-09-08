import React from 'react';

import { AppDataGrid, AttachmentsButton } from '@/components';
import { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';
import { formatJalaliDate } from '@/utils';

const FinancialReportTable = ({ rows = [], loading }) => {
  const columns = [
    {
      field: 'expenseDate',
      headerName: 'تاریخ',
      flex: 1,
      renderCell: ({ value }) => formatJalaliDate(value),
    },
    { field: 'expenseType', headerName: 'نوع هزینه', flex: 1 },
    { field: 'vehicleName', headerName: 'خودرو', flex: 1 },
    {
      field: 'amount',
      headerName: 'مبلغ',
      flex: 1,
      renderCell: ({ value }) => Number(value).toLocaleString('fa-IR'),
    },
    { field: 'description', headerName: 'توضیحات', flex: 1 },
    {
      field: 'attachments',
      headerName: 'مدارک',
      width: 90,
      renderCell: ({ row }) => (
        <AttachmentsButton
          ownerType={ATTACHMENT_OWNER_TYPE.EXPENSE}
          ownerId={row.id}
          title={`مدارک هزینه — ${row.expenseType}`}
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
      initialSortField="expenseDate"
      initialSortDirection="desc"
      stickyHeader
    />
  );
};

export default FinancialReportTable;
