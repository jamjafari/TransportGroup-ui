import React from 'react';

import { Stack, Box } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

import { AppAutocomplete, AppSelect, AppDateRangePicker } from '@/components';

import useDashboardSearch from '../../hooks/useDashboardSearch';

const DashboardSearchShortForm = () => {
  const {
    filters,

    vehicleOptions,
    driverOptions,
    missionOptions,

    fuelTypes,
    expenseTypes,

    insuranceStatusOptions,
    serviceStatusOptions,
    statusColorOptions,

    updateFilters,
  } = useDashboardSearch();

  return (
    <Stack spacing={3}>
      {/* Row 1 */}

      {/* Row 4 */}

      <DashboardGrid>
        <DashboardColumn md={6}>
          <AppDateRangePicker
            label="بازه زمانی"
            value={filters.dateRange}
            onChange={(value) => {
              console.log('DateRange', value);

              updateFilters({
                dateRange: value,
              });
            }}
          />
        </DashboardColumn>

        <DashboardColumn md={6}></DashboardColumn>
      </DashboardGrid>
    </Stack>
  );
};

export default DashboardSearchShortForm;
