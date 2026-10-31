import React from "react";

import { AppDataGrid, AttachmentsButton } from "@/components";
import { ATTACHMENT_OWNER_TYPE } from "@/constants/attachmentTypes";
import { formatJalaliDate, formatNumber } from "@/utils";
import { useTranslatedColumns } from "../../../../../hooks";
import i18n from '@/i18n';
const FinancialReportTable = ({ rows = [], loading }) => {
  const baseColumns = [
    {
      field: "expenseDate",
      headerName: "تاریخ",
      flex: 1,
      renderCell: ({ value }) => formatJalaliDate(value),
    },
    { field: "expenseType", headerName: "نوع هزینه", flex: 1 },
    { field: "vehicleName", headerName: "خودرو", flex: 1 },
    {
      field: "amount",
      headerName: "مبلغ",
      flex: 1,
      renderCell: ({ value }) => formatNumber(value),
    },
    { field: "description", headerName: "توضیحات", flex: 1 },
    {
      field: "attachments",
      headerName: "مدارک",
      width: 90,
      renderCell: ({ row }) => (
        <AttachmentsButton
          ownerType={ATTACHMENT_OWNER_TYPE.EXPENSE}
          ownerId={row.id}
          title={i18n.t('مدارک هزینه — {{name}}', { name: row.expenseType })}
        />
      ),
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

export default FinancialReportTable;
