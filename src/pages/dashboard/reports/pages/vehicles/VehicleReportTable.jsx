import React from 'react';

import { AppDataGrid, StatusChip, AttachmentsButton } from '@/components';

import useVehicleReport from './hooks/useVehicleReport';
import { vehicleStatusChipKey } from '@/modules/fleet/vehicles/constants';
import { ATTACHMENT_OWNER_TYPE } from '@/constants/attachmentTypes';

const VehicleReportTable = () => {
  const { data, loading } = useVehicleReport();

  const columns = [
    { field: 'vehicleName', headerName: 'خودرو', flex: 1 },
    { field: 'plateNumber', headerName: 'شماره پلاک', flex: 1 },
    {
      field: 'currentDriver',
      headerName: 'راننده فعلی',
      flex: 1,
      renderCell: ({ value }) => value || '—',
    },
    { field: 'currentKM', headerName: 'آخرین کیلومتر', flex: 1 },
    {
      field: 'status',
      headerName: 'وضعیت',
      flex: 1,
      renderCell: ({ value }) => <StatusChip status={value} />,
    },
    {
      field: 'attachments',
      headerName: 'مدارک',
      width: 90,
      renderCell: ({ row }) => (
        <AttachmentsButton
          ownerType={ATTACHMENT_OWNER_TYPE.VEHICLE}
          ownerId={row.id}
          title={`مدارک خودرو — ${row.vehicleName}`}
        />
      ),
    },
  ];

  return (
    <AppDataGrid
      rows={data}
      columns={columns}
      loading={loading}
      toolbar
      pagination
    />
  );
};

export default VehicleReportTable;
