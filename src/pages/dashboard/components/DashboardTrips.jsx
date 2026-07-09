import React, { memo, useMemo } from 'react';

import { AppDataGrid, AppCard, StatusChip } from '@/components';

import {
  DashboardTripsPropTypes,
  DashboardTripsDefaultProps,
} from './DashboardTrips.types';

const DashboardTrips = ({
  loading,

  data,

  onRowClick,
}) => {
  const columns = useMemo(
    () => [
      {
        field: 'tripNo',
        headerName: 'Trip No',
        width: 140,
      },

      {
        field: 'driverName',
        headerName: 'Driver',
        flex: 1,
        minWidth: 180,
      },

      {
        field: 'vehicle',
        headerName: 'Vehicle',
        width: 180,
      },

      {
        field: 'origin',
        headerName: 'Origin',
        width: 150,
      },

      {
        field: 'destination',
        headerName: 'Destination',
        width: 150,
      },

      {
        field: 'status',
        headerName: 'Status',
        width: 140,

        renderCell: ({ value }) => (
          <StatusChip
            label={value}
            color={
              value === 'Completed'
                ? 'success'
                : value === 'In Progress'
                  ? 'primary'
                  : value === 'Delayed'
                    ? 'warning'
                    : 'default'
            }
          />
        ),
      },

      {
        field: 'startTime',
        headerName: 'Start Time',
        width: 170,
      },
    ],
    [],
  );

  return (
    <AppCard title="Recent Trips">
      <AppDataGrid
        rows={data}

        columns={columns}

        loading={loading}

        pagination

        searchable

        sortable

        selectable={false}

        pageSize={5}

        onRowClick={onRowClick}

        emptyMessage="No trips found."
      />
    </AppCard>
  );
};

DashboardTrips.propTypes = DashboardTripsPropTypes;

DashboardTrips.defaultProps = DashboardTripsDefaultProps;

export default memo(DashboardTrips);
