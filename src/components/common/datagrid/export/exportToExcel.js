import * as XLSX from 'xlsx';

import { prepareExportData } from './exportUtils';

export const exportToExcel = ({ rows, columns, fileName = 'report.xlsx' }) => {
  const data = prepareExportData({
    rows,
    columns,
  });

  const worksheet = XLSX.utils.json_to_sheet(data);

  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(workbook, worksheet, 'Report');

  XLSX.writeFile(workbook, fileName);
};
