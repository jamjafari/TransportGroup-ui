import React, { useMemo } from "react";

import { AppDataGrid, StatusChip } from "@/components";
import { getStatusLabel } from "@/utils/statusLabels";
import { formatJalaliDate } from "@/utils";
import { formatTime } from "@/modules/vehicleRequests/constants";

import useVehicleRequestReport from "./hooks/useVehicleRequestReport";
import { useTranslatedColumns } from "../../../../../hooks";

const dash = (value) => value || "—";

const VehicleRequestReportTable = () => {
  const { data, loading } = useVehicleRequestReport();

  // ✅ ستون‌ها در useMemo ساخته می‌شوند تا useTranslatedColumns در هر رندر دوباره کار نکند
  const baseColumns = useMemo(
    () => [
      { field: "requesterName", headerName: "درخواست‌دهنده", flex: 1 },
      { field: "subject", headerName: "موضوع", flex: 1.4 },
      { field: "origin", headerName: "مبدا", flex: 1 },
      { field: "destination", headerName: "مقصد", flex: 1 },
      {
        field: "departureDate",
        headerName: "تاریخ رفت",
        flex: 1,
        renderCell: ({ value }) => formatJalaliDate(value),
      },
      {
        field: "departureTime",
        headerName: "ساعت رفت",
        flex: 0.8,
        renderCell: ({ value }) => dash(formatTime(value)),
        valueFormatter: (value) => dash(formatTime(value)),
      },
      {
        field: "returnDate",
        headerName: "تاریخ برگشت",
        flex: 1,
        renderCell: ({ value }) => (value ? formatJalaliDate(value) : "—"),
      },
      {
        field: "returnTime",
        headerName: "ساعت برگشت",
        flex: 0.8,
        renderCell: ({ value }) => dash(formatTime(value)),
        valueFormatter: (value) => dash(formatTime(value)),
      },
      {
        field: "status",
        headerName: "وضعیت",
        flex: 1,
        renderCell: ({ value }) => <StatusChip status={value} />,
        valueFormatter: (value) => getStatusLabel(value), // فقط برای Export
      },
      {
        field: "responseNote",
        headerName: "پاسخ مدیر نقلیه",
        flex: 1.4,
        renderCell: ({ value }) => dash(value),
      },
    ],
    [],
  );

  const columns = useTranslatedColumns(baseColumns);

  return (
    <AppDataGrid
      rows={data ?? []}
      columns={columns}
      loading={loading}
      toolbar
      pagination
      emptyTitle="درخواستی یافت نشد."
    />
  );
};

export default VehicleRequestReportTable;
