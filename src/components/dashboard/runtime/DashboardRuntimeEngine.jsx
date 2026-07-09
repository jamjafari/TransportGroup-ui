import React from 'react';

import { Box } from '@mui/material';

import WidgetRenderer from './WidgetRenderer';

const DashboardRuntime = ({ dashboard, apiClient }) => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
      {dashboard.layout.map((item) => {
        const widget = dashboard.widgets.find((w) => w.id === item.i);

        if (!widget) return null;

        return (
          <Box
            key={item.i}
            gridColumn={`span ${item.w}`}
            gridRow={`span ${item.h}`}
          >
            <WidgetRenderer widget={widget} apiClient={apiClient} />
          </Box>
        );
      })}
    </Box>
  );
};

export default DashboardRuntime;
