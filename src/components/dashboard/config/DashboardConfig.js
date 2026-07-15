import DashboardSection from '../layout/DashboardSection';

import DashboardDefaultLayout from '../layout/DashboardDefaultLayout';

const DashboardConfig = {
  title: 'Fleet Management Dashboard',

  refreshInterval: 300000,

  defaultLayout: DashboardDefaultLayout,

  sections: [
    DashboardSection.Statistics,

    DashboardSection.Charts,

    DashboardSection.Tables,
  ],
};

export default DashboardConfig;
