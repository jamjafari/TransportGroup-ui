import React from "react";

import { AppDataGrid, StatusChip } from "@/components";
import { useTranslatedColumns } from "../../../../../hooks";
const FinancialTransactionsTable = ({ rows = [], loading }) => {
  const baseColumns = [
    {
      field: "expenseDate",
      headerName: "تاریخ",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "expenseType",
      headerName: "نوع هزینه",
      width: 180,
      align: "left",
      headerAlign: "right",
    },
    {
      field: "vehicleName",
      headerName: "خودرو",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "amount",
      headerName: "مبلغ",
      width: 280,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "description",
      headerName: "توضیحات",
      width: 280,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "وضعیت",
      renderCell: ({ value }) => <StatusChip status={value} />,
      width: 280,
      align: "center",
      headerAlign: "center",
    },
  ];
  const columns = useTranslatedColumns(baseColumns);

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

export default FinancialTransactionsTable;
