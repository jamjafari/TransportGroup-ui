import React from 'react';

import { AppDataGrid } from '@/components';

import { useTranslatedColumns } from "@/hooks";

// بیرون از کامپوننت تعریف شده تا هویت آرایه در هر رندر عوض نشود؛
// useTranslatedColumns روی همین هویت memo می‌کند.
const BASE_COLUMNS = [
  {
    field: 'vehicleName',
    headerName: 'نام خودرو',
    flex: 1,
  },
  {
    field: 'fuelCost',
    headerName: 'هزینه سوخت',
    flex: 1,
  },
  {
    field: 'expenseCost',
    headerName: 'هزینه های سرویس',
    flex: 1,
  },
  {
    field: 'totalCost',
    headerName: 'کل هزینه ها',
    flex: 1,
  },
  {
    field: 'missionCount',
    headerName: 'تعداد ماموریت',
    flex: 1,
  },
];

const FBVReportTable = ({ rows = [], loading }) => {
  // ✅ عنوان ستون‌ها ترجمه می‌شود (متن فارسی خودش کلید ترجمه است)
  const columns = useTranslatedColumns(BASE_COLUMNS);

  return (
    <AppDataGrid
      rows={rows}
      columns={columns}
      loading={loading}

      initialSortField="vehicleName"
      initialSortDirection="missionCount"
      stickyHeader
    />
  );
};

export default FBVReportTable;
