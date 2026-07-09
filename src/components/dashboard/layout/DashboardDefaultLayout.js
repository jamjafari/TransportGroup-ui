const DashboardDefaultLayout = [
  {
    id: 'statistics',

    title: 'Statistics',

    columns: 4,

    widgets: ['vehicle.stat', 'driver.stat', 'fuel.stat', 'expense.stat'],
  },

  {
    id: 'charts',

    title: 'Charts',

    columns: 2,

    widgets: ['fuel.chart', 'vehicle.chart', 'expense.chart', 'monthly.chart'],
  },

  {
    id: 'tables',

    title: 'Tables',

    columns: 1,

    widgets: ['vehicle.table', 'driver.table', 'fuel.table', 'mission.table'],
  },
];

export default DashboardDefaultLayout;
