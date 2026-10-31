import React from "react";
import { getStatusLabel } from "@/utils/statusLabels"; // ✅ اضافه شد

import { AppDataGrid, StatusChip, AttachmentsButton } from "@/components";

import useVehicleReport from "./hooks/useVehicleReport";
import { vehicleStatusChipKey } from "@/modules/fleet/vehicles/constants";
import { ATTACHMENT_OWNER_TYPE } from "@/constants/attachmentTypes";
import { useTranslatedColumns } from "../../../../../hooks";
import i18n from '@/i18n';
const VehicleReportTable = () => {
  const { data, loading } = useVehicleReport();

  const baseColumns = [
    { field: "vehicleName", headerName: "خودرو", flex: 1 },
    { field: "plateNumber", headerName: "شماره پلاک", flex: 1 },
    {
      field: "currentDriver",
      headerName: "راننده فعلی",
      flex: 1,
      renderCell: ({ value }) => value || "—",
    },
    { field: "currentKM", headerName: "آخرین کیلومتر", flex: 1 },
    {
      field: "status",
      headerName: "وضعیت",
      flex: 1,
      renderCell: ({ value }) => <StatusChip status={value} />,
      valueFormatter: (value) => getStatusLabel(value), // ✅ اضافه شد — فقط برای Export
    },
    {
      field: "attachments",
      headerName: "مدارک",
      width: 90,
      renderCell: ({ row }) => (
        <AttachmentsButton
          ownerType={ATTACHMENT_OWNER_TYPE.VEHICLE}
          ownerId={row.id}
          title={i18n.t('مدارک خودرو — {{name}}', { name: row.vehicleName })}
        />
      ),
    },
  ];
  const columns = useTranslatedColumns(baseColumns);

  return (
    <AppDataGrid
      rows={data}
      columns={columns}
      loading={loading}
      toolbar
      pagination
    />
  );
};

export default VehicleReportTable;
