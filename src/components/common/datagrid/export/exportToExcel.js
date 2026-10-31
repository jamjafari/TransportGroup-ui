import * as XLSX from 'xlsx';

import i18n from '@/i18n';

import { prepareExportData } from './exportUtils';

export const exportToExcel = ({ rows, columns, fileName = 'report.xlsx' }) => {
  // ✅ سرستون فایل Excel به زبان صفحه (مثل خود جدول). خروجی PDF عمداً فارسی می‌ماند.
  const translatedColumns = columns.map((col) =>
    typeof col.headerName === 'string'
      ? { ...col, headerName: i18n.t(col.headerName) }
      : col,
  );

  const data = prepareExportData({
    rows,
    columns: translatedColumns,
  });

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

  XLSX.writeFile(workbook, fileName);
};
