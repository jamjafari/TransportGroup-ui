import jsPDF from 'jspdf';

import autoTable from 'jspdf-autotable';

import { prepareExportData } from './exportUtils';

export const exportToPdf = ({ rows, columns, fileName = 'report.pdf' }) => {
  const doc = new jsPDF();

  const data = prepareExportData({
    rows,
    columns,
  });

  const tableHead = [columns.map((c) => c.headerName)];

  const tableBody = data.map((row) => Object.values(row));

  autoTable(doc, {
    head: tableHead,
    body: tableBody,
  });

  doc.save(fileName);
};
