import { useMemo, useCallback } from 'react';

import DashboardRepository from '../../../../repositories/dashboard/dashboard.repository';
import { StatusChip } from '@/components';
import useDashboardWidget from '@/pages/dashboard/hooks/useDashboardWidget';
import { formatJalaliDate } from '@/utils';
import { insuranceTypeOptions } from '@/modules';

const useComplianceAlertsTable = () => {
  const widget = useDashboardWidget({
    title: 'یادآوری بیمه و معاینه فنی',
    subtitle: 'موارد نزدیک به انقضا و منقضی‌شده',
    fetcher: () => DashboardRepository.getComplianceAlerts(),
  });
  const insuranceLabel = useCallback(
    (value) =>
      insuranceTypeOptions.find((option) => option.value === value)?.label ??
      '—',
    [],
  );
  const columns = useMemo(
    () => [
      { field: 'type', headerName: 'نوع', flex: 1 },
      {
        field: 'insuranceType',
        headerName: 'نوع بیمه',
        flex: 1,
        renderCell: ({ row }) => insuranceLabel(row.insuranceType),
      },
      { field: 'plateNumber', headerName: 'خودرو', flex: 1 },
      {
        field: 'expiryDate',
        headerName: 'تاریخ انقضا',
        flex: 1,
        renderCell: ({ value }) => formatJalaliDate(value),
      },
      {
        field: 'status',
        headerName: 'وضعیت',
        flex: 1,
        renderCell: ({ row }) => {
          row.remainingDays;
        },
      },
    ],
    [],
  );

  return {
    ...widget,
    columns,
    rows: widget.rows,
  };
};

export default useComplianceAlertsTable;
