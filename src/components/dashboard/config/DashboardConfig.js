import DashboardSections from './DashboardSections';

import DashboardDefaultLayout from './DashboardDefaultLayout';

const DashboardConfig = {
  title: 'Fleet Management Dashboard',

  refreshInterval: 300000,

  defaultLayout: DashboardDefaultLayout,

  sections: [
    DashboardSections.Statistics,

    DashboardSections.Charts,

    DashboardSections.Tables,
  ],
};

export default DashboardConfig;
