import React, { memo } from 'react';

import { StatusChip, AppDataGrid, AttachmentsButton } from '@/components';
import { formatJalaliDate } from '@/utils';
import { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';
import { getStatusLabel } from '@/utils/statusLabels'; // ✅ اضافه شد

const columns = [
  { field: 'plateNumber', headerName: 'پلاک', flex: 1 },
  { field: 'vehicleName', headerName: 'نام خودرو', flex: 1.5 },
  { field: 'serviceType', headerName: 'نوع سرویس', flex: 1.5 },
  {
    field: 'serviceDate',
    headerName: 'تاریخ سرویس',
    flex: 1.2,
    renderCell: ({ value }) => formatJalaliDate(value),
  },
  { field: 'odometerKm', headerName: 'کیلومتر سرویس', flex: 1, type: 'number' },
  {
    field: 'nextServiceKm',
    headerName: 'کیلومتر بعدی',
    flex: 1,
    type: 'number',
  },
  { field: 'remainingKm', headerName: 'باقی‌مانده', flex: 1, type: 'number' },
  {
    field: 'amount',
    headerName: 'هزینه',
    flex: 1.2,
    renderCell: ({ value }) =>
      value != null ? Number(value).toLocaleString('fa-IR') : '—',
  },
  {
    field: 'status',
    headerName: 'وضعیت',
    flex: 1,
    renderCell: ({ value }) => <StatusChip status={value} />,
    valueFormatter: (value) => getStatusLabel(value), // ✅ اضافه شد — فقط برای Export
  },
  {
    field: 'attachments',
    headerName: 'مدارک',
    width: 90,
    renderCell: ({ row }) => (
      <AttachmentsButton
        ownerType={ATTACHMENT_OWNER_TYPE.VEHICLE_SERVICE}
        ownerId={row.id}
        title={`مدارک سرویس — ${row.serviceType}`}
      />
    ),
  },
];

const ServiceReportTable = ({ rows = [], loading }) => {
  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      loading={loading}
      toolbar
      pagination
    />
  );
};

export default memo(ServiceReportTable);
