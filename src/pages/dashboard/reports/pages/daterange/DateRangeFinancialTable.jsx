import React from 'react';

import { AppDataGrid, StatusChip } from '@/components';

import useDateRangeFinancialReport from './hooks/useDateRangeFinancialReport';
import { formatJalaliDate } from '@/utils';

import { useTranslatedColumns } from "@/hooks";

// بیرون از کامپوننت: هویت آرایه ثابت می‌ماند تا memo در useTranslatedColumns کار کند
const BASE_COLUMNS = [
    {
      field: 'expenseDate',
      headerName: 'تاریخ',
      flex: 1,
      renderCell: ({ value }) => formatJalaliDate(value),
    },
    {
      field: 'expenseType',
      headerName: 'نوع هزینه',
      flex: 1,
    },
    {
      field: 'vehicleName',
      headerName: 'خودرو',
      flex: 1,
    },
    {
      field: 'amount',
      headerName: 'مبلغ',
      flex: 1,
    },
    {
      field: 'description',
      headerName: 'توضیحات',
      flex: 1,
    },
    {
      field: 'status',
      headerName: 'وضعیت',
      renderCell: ({ value }) => <StatusChip status={value} />,
      flex: 1,
    },
];

const DateRangeFinancialTable = () => {
  const { data, loading } = useDateRangeFinancialReport();

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

export default DateRangeFinancialTable;
