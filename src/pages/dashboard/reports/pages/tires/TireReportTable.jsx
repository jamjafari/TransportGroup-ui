import React, { useMemo, useState } from "react";

import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tooltip,
  Typography,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";

import { AppDataGrid, AppDialog, AttachmentsButton, StatusChip } from "@/components";
import { getStatusLabel } from "@/utils/statusLabels";
import { formatJalaliDate, formatNumber } from "@/utils";
import { tirePositionOptions } from "@/modules/Tires/constants/tireStatus";
import { ATTACHMENT_OWNER_TYPE } from "@/constants/attachmentTypes";
import i18n from "@/i18n";

import useTireReport from "./hooks/useTireReport";
import { useTranslatedColumns } from "../../../../../hooks";

const dash = (value) => (value === null || value === undefined || value === "" ? "—" : value);

const positionLabel = (value) => {
  const option = tirePositionOptions.find((o) => o.value === value);
  return option ? i18n.t(option.label) : "—";
};

// ✅ تاریخچه‌ی کامل تخصیص یک تایر به خودروها (جدیدترین اول)
const TireHistoryDialog = ({ tire, onClose }) => (
  <AppDialog
    open={!!tire}
    onClose={onClose}
    maxWidth="md"
    title={tire ? i18n.t("تاریخچه‌ی تخصیص تایر — {{serial}}", { serial: tire.serialNumber }) : ""}
  >
    {tire && tire.history.length === 0 ? (
      <Typography variant="bodyText" color="text.secondary">
        {i18n.t("این تایر تاکنون روی هیچ خودرویی نصب نشده است.")}
      </Typography>
    ) : (
      tire && (
        <Table size="small">
          <TableHead>
            <TableRow>
              {["خودرو", "موقعیت نصب", "تاریخ نصب", "کارکرد نصب (KM)", "تاریخ خارج کردن", "کارکرد هنگام خارج کردن", "وضعیت"].map(
                (h) => (
                  <TableCell key={h} sx={{ typography: "bodyText", fontWeight: 600 }}>
                    {i18n.t(h)}
                  </TableCell>
                ),
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {tire.history.map((h, index) => (
              <TableRow key={index}>
                <TableCell sx={{ typography: "bodyText" }}>{h.vehiclePlate}</TableCell>
                <TableCell sx={{ typography: "bodyText" }}>{positionLabel(h.position)}</TableCell>
                <TableCell sx={{ typography: "bodyText" }}>{formatJalaliDate(h.installDate)}</TableCell>
                <TableCell sx={{ typography: "bodyText" }}>{formatNumber(h.installKM)}</TableCell>
                <TableCell sx={{ typography: "bodyText" }}>{h.removeDate ? formatJalaliDate(h.removeDate) : "—"}</TableCell>
                <TableCell sx={{ typography: "bodyText" }}>{h.removeKM != null ? formatNumber(h.removeKM) : "—"}</TableCell>
                <TableCell>
                  <StatusChip status={h.isCurrent ? "Mounted" : "Removed"} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )
    )}
  </AppDialog>
);

const TireReportTable = () => {
  const { data, loading } = useTireReport();
  const [historyTire, setHistoryTire] = useState(null);

  const baseColumns = useMemo(
    () => [
      { field: "brand", headerName: "برند", flex: 1 },
      { field: "model", headerName: "مدل", flex: 1 },
      { field: "serialNumber", headerName: "شماره سریال", flex: 1 },
      { field: "size", headerName: "سایز", flex: 0.8 },
      {
        field: "purchaseDate",
        headerName: "تاریخ خرید",
        flex: 1,
        renderCell: ({ value }) => formatJalaliDate(value),
      },
      {
        field: "vehiclePlate",
        headerName: "خودرو",
        flex: 1,
        renderCell: ({ value }) => dash(value),
        valueFormatter: (value) => dash(value),
      },
      {
        field: "position",
        headerName: "موقعیت نصب",
        flex: 1,
        renderCell: ({ value }) => positionLabel(value),
        valueFormatter: (value) => positionLabel(value),
      },
      {
        field: "installDate",
        headerName: "تاریخ نصب",
        flex: 1,
        renderCell: ({ value }) => (value ? formatJalaliDate(value) : "—"),
      },
      {
        field: "kmOnVehicle",
        headerName: "کارکرد روی خودرو (KM)",
        flex: 1,
        renderCell: ({ value }) => (value != null ? formatNumber(value) : "—"),
      },
      {
        field: "status",
        headerName: "وضعیت",
        flex: 1.2,
        renderCell: ({ value }) => <StatusChip status={value} />,
        valueFormatter: (value) => getStatusLabel(value), // فقط برای Export
      },
      {
        field: "history",
        headerName: "تاریخچه",
        width: 90,
        renderCell: ({ row }) => (
          <Tooltip title={i18n.t("تاریخچه‌ی تخصیص ({{count}})", { count: formatNumber(row.assignmentCount) })}>
            <IconButton
              size="small"
              aria-label={i18n.t("تاریخچه")}
              onClick={(event) => {
                event.stopPropagation();
                setHistoryTire(row);
              }}
            >
              <HistoryIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        ),
        valueFormatter: (_, row) => row.assignmentCount,
      },
      {
        field: "attachments",
        headerName: "مدارک",
        width: 90,
        renderCell: ({ row }) => (
          <AttachmentsButton
            ownerType={ATTACHMENT_OWNER_TYPE.TIRE}
            ownerId={row.id}
            title={i18n.t("مدارک تایر — {{name}}", { name: row.serialNumber })}
          />
        ),
      },
    ],
    [],
  );

  const columns = useTranslatedColumns(baseColumns);

  return (
    <>
      <AppDataGrid
        rows={data ?? []}
        columns={columns}
        loading={loading}
        toolbar
        pagination
        emptyTitle="تایر ای ثبت نشده است"
      />
      <TireHistoryDialog tire={historyTire} onClose={() => setHistoryTire(null)} />
    </>
  );
};

export default TireReportTable;
