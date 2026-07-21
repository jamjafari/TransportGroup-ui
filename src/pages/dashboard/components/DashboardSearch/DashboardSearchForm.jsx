import React from 'react';

import { Stack, Box } from '@mui/material';

import { DashboardGrid, DashboardColumn } from '@/components';

import { AppAutocomplete, AppSelect, AppDateRangePicker } from '@/components';

import useDashboardSearch from '../../hooks/useDashboardSearch';

const DashboardSearchForm = () => {
  const {
    filters,

    vehicleOptions,
    driverOptions,
    missionOptions,

    fuelTypes,
    expenseTypes,

    insuranceStatusOptions,
    serviceStatusOptions,

    updateFilters,
  } = useDashboardSearch();
  // console.log('searchform fuelType:', fuelTypes);
  // console.log(expenseTypes);
  // console.log(insuranceStatusOptions);
  // console.log(serviceStatusOptions);
  return (
    <Stack spacing={3}>
      {/* Row 1 */}

      <DashboardGrid>
        <DashboardColumn md={6}>
          <AppAutocomplete
            label="خودرو"
            value={filters.vehicleId}
            options={vehicleOptions}
            onChange={(value) =>
              updateFilters({
                vehicleId: value,
              })
            }
          />
        </DashboardColumn>

        <DashboardColumn md={6}>
          <AppAutocomplete
            label="راننده"
            value={filters.driverId}
            options={driverOptions}
            onChange={(value) =>
              updateFilters({
                driverId: value,
              })
            }
          />
        </DashboardColumn>
      </DashboardGrid>

      {/* Row 2 */}

      <DashboardGrid>
        <DashboardColumn md={6}>
          <AppAutocomplete
            label="ماموریت"
            value={filters.missionId}
            options={missionOptions}
            onChange={(value) =>
              updateFilters({
                missionId: value,
              })
            }
          />
        </DashboardColumn>

        <DashboardColumn md={6}>
          <AppSelect
            label="نوع هزینه"
            value={filters.expenseTypeId}
            items={expenseTypes}

            onChange={(value) => {
              updateFilters({
                expenseTypeId: value,
              });
            }}
          />
        </DashboardColumn>
      </DashboardGrid>

      {/* Row 3 */}

      <DashboardGrid>
        <DashboardColumn md={6}>
          <AppSelect
            label="نوع سوخت"
            value={filters.fuelTypeId}
            items={fuelTypes}
            onChange={(value) =>
              updateFilters({
                fuelTypeId: value,
              })
            }
          />
        </DashboardColumn>

        <DashboardColumn md={6}>
          <AppSelect
            label="وضعیت بیمه"
            value={filters.insuranceStatus}
            items={insuranceStatusOptions}
            onChange={(value) =>
              updateFilters({
                insuranceStatus: value,
              })
            }
          />
        </DashboardColumn>
      </DashboardGrid>

      {/* Row 4 */}

      <DashboardGrid>
        <DashboardColumn md={6}>
          <AppSelect
            label="وضعیت سرویس"
            value={filters.serviceStatus}
            items={serviceStatusOptions}
            onChange={(value) =>
              updateFilters({
                serviceStatus: value,
              })
            }
          />
        </DashboardColumn>

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
      </DashboardGrid>
    </Stack>
  );
};

export default DashboardSearchForm;
