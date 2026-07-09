import React from 'react';

import useBuilder from './useBuilder';

import BuilderCanvas from './BuilderCanvas';

import BuilderToolbar from './BuilderToolbar';

const DashboardBuilder = ({ initialDashboard, apiClient }) => {
  const builder = useBuilder(initialDashboard);

  return (
    <div>
      <BuilderToolbar
        onAddChart={() => {}}
        onAddTable={() => {}}
        onAddStat={() => {}}
        onSave={() => {
          console.log(builder.dashboard);
        }}
      />

      <BuilderCanvas
        dashboard={builder.dashboard}
        onMoveWidget={builder.moveWidget}
        apiClient={apiClient}
      />
    </div>
  );
};

export default DashboardBuilder;
