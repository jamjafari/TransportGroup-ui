import React from 'react';

import { Stack, Box } from '@mui/material';

import { AppAutocomplete, AppDateRangePicker, AppButton } from '@/components';

import useDashboardSearch from '../../hooks/useDashboardSearch';

const DashboardSearchShortForm = () => {
  const {
    filters,
    vehicleOptions,
    driverOptions,
    updateFilters,
    clearFilters,
  } = useDashboardSearch();

  return (
    <Stack spacing={3} sx={{ width: '100%' }}>
      <Box
        sx={{
          width: {
            xs: '100%',
            md: '40%',
          },
          maxWidth: {
            xs: '100%',
            md: '40%',
          },
        }}
      >
        <Stack spacing={2}>
          {/* خودرو */}
          <AppAutocomplete
            fullWidth
            label="خودرو"
            value={filters.vehicleId}
            options={vehicleOptions}
            onChange={(value) => updateFilters({ vehicleId: value })}
          />

          {/* راننده */}
          <AppAutocomplete
            fullWidth
            label="راننده"
            value={filters.driverId}
            options={driverOptions}
            onChange={(value) => updateFilters({ driverId: value })}
          />

          {/* بازه زمانی */}
          <AppDateRangePicker
            fullWidth
            label="بازه زمانی"
            value={filters.dateRange}
            onChange={(value) => updateFilters({ dateRange: value })}
          />
        </Stack>
      </Box>

      <Box
        sx={{
          width: {
            xs: '100%',
            md: '40%',
          },
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <AppButton variant="outlined" onClick={clearFilters}>
          پاک کردن فیلترها
        </AppButton>
      </Box>
    </Stack>
  );
};

export default DashboardSearchShortForm;
