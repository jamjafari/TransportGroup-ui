import React from 'react';

import { AppDataGrid } from '@/components';

import useVehicleReport from './hooks/useVehicleReport';

const VehicleReportTable = () => {
  const { data, loading } = useVehicleReport();

  const columns = [
    {
      field: 'vehicleName',
      headerName: 'خودرو',
      flex: 1,
    },
    {
      field: 'driverName',
      headerName: 'راننده',
      flex: 1,
    },
    {
      field: 'plateNumber',
      headerName: 'شماره خودرو',
      flex: 1,
    },
    {
      field: 'odometer',
      headerName: 'آخرین کیلومتر',
      flex: 1,
    },

    {
      field: 'status',
      headerName: 'وضعیت',
      type: 'status',
      flex: 1,
    },
  ];

  return <AppDataGrid rows={data} columns={columns} loading={loading} />;
};

export default VehicleReportTable;
