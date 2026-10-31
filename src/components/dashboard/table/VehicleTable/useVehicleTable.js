import { useMemo } from "react";

import DashboardRepository from "../../../../repositories/dashboard/dashboard.repository";

import useDashboardWidget from "@/pages/dashboard/hooks/useDashboardWidget";
import useDashboardSearch from "@/pages/dashboard/hooks/useDashboardSearch";
import { useTranslatedColumns } from "../../../../hooks";
import { formatNumber } from '@/utils';
const useVehicleTable = () => {
  const { filters } = useDashboardSearch();

  const widget = useDashboardWidget({
    title: "وضعیت خودروها",
    subtitle: "کارکرد، ماموریت و هزینه هر خودرو",
    fetcher: () => DashboardRepository.getVehiclesDashboard(filters),
  });

  const baseColumns = useMemo(
    () => [
      { field: "plateNumber", headerName: "پلاک", flex: 1 },
      {
        field: "currentKM",
        headerName: "کیلومتر جاری",
        flex: 1,
        align: "right",
      },
      {
        field: "missionCount",
        headerName: "تعداد ماموریت",
        flex: 1,
        align: "right",
      },
      {
        field: "fuelPer100Km",
        headerName: "مصرف سوخت (لیتر/۱۰۰کیلومتر)",
        flex: 1,
        align: "right",
        renderCell: ({ value }) => (value != null ? value.toFixed(2) : "—"),
      },
      {
        field: "serviceCount",
        headerName: "تعداد سرویس",
        flex: 1,
        align: "right",
      },
      {
        field: "totalCost",
        headerName: "هزینه کل",
        flex: 1,
        align: "right",
        renderCell: ({ value }) => formatNumber(value ?? 0),
      },
      {
        field: "status",
        headerName: "وضعیت",
        flex: 1,
        align: "right",
      },
    ],
    [],
  );
  const columns = useTranslatedColumns(baseColumns);

  return {
    ...widget,
    columns,
    rows: widget.rows,
  };
};

export default useVehicleTable;
