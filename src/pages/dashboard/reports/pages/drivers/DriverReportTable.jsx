import React from "react";

import { AppDataGrid, StatusChip, AttachmentsButton } from "@/components";

import useDriverReport from "./hooks/useDriverReport";
import { ATTACHMENT_OWNER_TYPE } from "@/constants/attachmentTypes";
import { getStatusLabel } from "@/utils/statusLabels"; // ✅ اضافه شد
import { useTranslatedColumns } from "../../../../../hooks";
import i18n from '@/i18n';
const DriverReportTable = () => {
  const { data, loading } = useDriverReport();

  const baseColumns = [
    {
      field: "fullName",
      headerName: "نام راننده",
      flex: 1,
    },
    {
      field: "nationalCode",
      headerName: "کد ملی",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "موبایل",
      flex: 1,
    },
    {
      field: "licenseNumber",
      headerName: "گواهینامه",
      flex: 1,
    },
    {
      field: "missionCount",
      headerName: "ماموریت",
      flex: 1,
    },
    {
      field: "status",
      headerName: "وضعیت",
      renderCell: ({ value }) => <StatusChip status={value} />,
      valueFormatter: (value) => getStatusLabel(value), // ✅ اضافه شد — فقط برای Export

      flex: 1,
    },
    {
      field: "attachments",
      headerName: "مدارک",
      width: 90,
      renderCell: ({ row }) => (
        <AttachmentsButton
          ownerType={ATTACHMENT_OWNER_TYPE.DERIVER}
          ownerId={row.id}
          title={i18n.t('مدارک راننده — {{name}}', { name: row.fullName })}
        />
      ),
    },
  ];
  const columns = useTranslatedColumns(baseColumns);

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

export default DriverReportTable;
