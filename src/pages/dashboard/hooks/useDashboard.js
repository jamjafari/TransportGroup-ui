import { useMemo, useState } from 'react';

const mockStatistics = [
  {
    id: 1,
    title: 'Active Vehicles',
    value: 128,
    description: '12 more than last week',
    status: 'Active',
    statusColor: 'success',
  },

  {
    id: 2,
    title: 'Active Drivers',
    value: 86,
    description: '4 new drivers',
    status: 'Available',
    statusColor: 'primary',
  },

  {
    id: 3,
    title: 'Trips Today',
    value: 54,
    description: '8 in progress',
    status: 'Running',
    statusColor: 'warning',
  },

  {
    id: 4,
    title: 'Pending Maintenance',
    value: 7,
    description: 'Require attention',
    status: 'Warning',
    statusColor: 'error',
  },
];

const mockCharts = {
  fleetTrend: {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],

    series: [
      {
        name: 'Trips',

        data: [32, 40, 36, 48, 52, 45, 60],
      },
    ],
  },

  tripStatistics: {
    categories: ['Completed', 'Running', 'Cancelled'],

    series: [
      {
        name: 'Trips',

        data: [142, 24, 6],
      },
    ],
  },

  vehicleStatus: {
    labels: ['Available', 'Running', 'Maintenance'],

    series: [72, 48, 8],
  },
};

const mockTrips = [
  {
    id: 1,

    tripNo: 'TR-1001',

    driverName: 'John Smith',

    vehicle: 'Truck-12',

    origin: 'Depot A',

    destination: 'Depot B',

    startTime: '08:30',

    status: 'Completed',
  },

  {
    id: 2,

    tripNo: 'TR-1002',

    driverName: 'Michael Brown',

    vehicle: 'Truck-18',

    origin: 'Depot C',

    destination: 'Depot A',

    startTime: '09:15',

    status: 'In Progress',
  },

  {
    id: 3,

    tripNo: 'TR-1003',

    driverName: 'David Wilson',

    vehicle: 'Truck-03',

    origin: 'Depot A',

    destination: 'Depot D',

    startTime: '10:10',

    status: 'Delayed',
  },
];

const mockAlerts = [
  {
    id: 1,

    severity: 'warning',

    title: 'Vehicle Maintenance',

    description: 'Truck-08 requires scheduled maintenance.',
  },

  {
    id: 2,

    severity: 'error',

    title: 'Trip Delay',

    description: 'Trip TR-1003 is delayed.',
  },
];

const mockActivities = [
  {
    id: 1,

    title: 'Trip Completed',

    description: 'TR-1001 completed successfully.',

    time: '10 minutes ago',

    color: 'success',
  },

  {
    id: 2,

    title: 'Driver Assigned',

    description: 'Driver assigned to TR-1004.',

    time: '30 minutes ago',

    color: 'primary',
  },

  {
    id: 3,

    title: 'Maintenance Created',

    description: 'Maintenance request for Truck-08.',

    time: '1 hour ago',

    color: 'warning',
  },
];

export const useDashboard = () => {
  const [loading] = useState(false);

  const dashboard = useMemo(
    () => ({
      statistics: mockStatistics,

      charts: mockCharts,

      trips: mockTrips,

      alerts: mockAlerts,

      activities: mockActivities,
    }),
    [],
  );

  return {
    loading,

    statistics: dashboard.statistics,

    charts: dashboard.charts,

    trips: dashboard.trips,

    alerts: dashboard.alerts,

    activities: dashboard.activities,
  };
};

export default useDashboard;
