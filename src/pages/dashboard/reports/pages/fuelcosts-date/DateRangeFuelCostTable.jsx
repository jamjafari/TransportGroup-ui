import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';

import useDateRangeFuelCostReport from './hooks/useDateRangeFuelCostReport';
import { formatJalaliDate } from '@/utils';

import { useTranslatedColumns } from "@/hooks";

// بیرون از کامپوننت: هویت آرایه ثابت می‌ماند تا memo در useTranslatedColumns کار کند
const BASE_COLUMNS = [
    {
      field: 'fuelDate',
      headerName: 'تاریخ',
      flex: 1,
      renderCell: ({ value }) => formatJalaliDate(value),
    },
    {
      field: 'vehicleName',
      headerName: 'خودرو',
      flex: 1,
    },
    {
      field: 'driverName',
      headerName: 'نام راننده',
      flex: 1,
    },
    {
      field: 'unitCost',
      headerName: 'هزینه واحد',
      flex: 1,
    },
    {
      field: 'totalCost',
      headerName: 'مبلغ',
      flex: 1,
    },
    {
      field: 'fuelAmount',
      headerName: 'مقدار سوخت (لیتر)',
      flex: 1,
    },
    {
      field: 'stationName',
      headerName: 'نام جایگاه',
      flex: 1,
    },
];

const DateRangeFuelCostTable = () => {
  const { data, loading } = useDateRangeFuelCostReport();

  // ✅ عنوان ستون‌ها ترجمه می‌شود (متن فارسی خودش کلید ترجمه است)
  const columns = useTranslatedColumns(BASE_COLUMNS);

  return (
    <AppDataGrid
      toolbar
      pagination
      rows={data}
      columns={columns}
      loading={loading}
    />
  );
};

export default DateRangeFuelCostTable;
