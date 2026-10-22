import React from "react";

import { AppDataGrid, AttachmentsButton } from "@/components";

import { formatJalaliDate } from "@/utils";
import { ATTACHMENT_OWNER_TYPE } from "@/constants/attachmentTypes";
import { useTranslatedColumns } from "../../../../../hooks";
const FuelCostReportTable = ({ rows = [], loading }) => {
  const baseColumns = [
    {
      field: "vehicleName",
      headerName: "خودرو",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fuelDate",
      headerName: "تاریخ سوخت‌گیری",
      width: 180,
      align: "center",
      headerAlign: "center",
      renderCell: ({ value }) => formatJalaliDate(value),
    },
    {
      field: "unitCost",
      headerName: "قیمت واحد",
      width: 180,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "fuelAmount",
      headerName: "مقدار سوخت‌گیری (لیتر)",
      width: 220,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "totalCost",
      headerName: "هزینه پرداختی",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "odometerKM",
      headerName: "کیلومتر در سوخت‌گیری",
      width: 220,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "stationName",
      headerName: "جایگاه",
      width: 200,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "attachments",
      headerName: "مدارک",
      width: 90,
      renderCell: ({ row }) => (
        <AttachmentsButton
          ownerType={ATTACHMENT_OWNER_TYPE.FUEL_RECORD}
          ownerId={row.id}
          title={`مدارک سوختگیری — ${row.vehicleName}`}
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
      initialSortField="fuelDate"
      initialSortDirection="desc"
      stickyHeader
    />
  );
};

export default FuelCostReportTable;
