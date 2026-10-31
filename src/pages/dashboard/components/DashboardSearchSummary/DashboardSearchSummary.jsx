import React from 'react';

import { Stack, Chip, Typography } from '@mui/material';

import useDashboardSearch from '../../hooks/useDashboardSearch';

import { buildDashboardSearchSummary } from '../../utils/DashboardSearchSummary.utils';
import i18n from '@/i18n';

const DashboardSearchSummary = () => {
  const {
    filters,

    vehicleOptions,
    driverOptions,
    missionOptions,
    statusColorOptions,

    fuelTypes,
    expenseTypes,

    insuranceStatusOptions,
    serviceStatusOptions,
  } = useDashboardSearch();

  const summary = buildDashboardSearchSummary(filters, {
    vehicleOptions,
    driverOptions,
    missionOptions,

    fuelTypes,
    expenseTypes,
    statusColorOptions,

    insuranceStatusOptions,
    serviceStatusOptions,
  });

  if (!summary.length) {
    return null;
  }

  return (
    <Stack spacing={1}>
      <Typography variant="subtitle2" fontWeight={600}>
        {i18n.t('فیلترهای فعال')}
      </Typography>

      <Stack direction="row" spacing={1} flexWrap="wrap">
        {summary.map((item) => (
          <Chip
            key={item.label}
            label={`${i18n.t(item.label)} : ${typeof item.value === 'string' ? i18n.t(item.value) : item.value}`}
            size="small"
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default DashboardSearchSummary;
