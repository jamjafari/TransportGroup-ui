import React from 'react';

import { Box } from '@mui/material';

import WidgetRenderer from '../runtime/WidgetRenderer';

const BuilderCanvas = ({ dashboard, onMoveWidget, apiClient }) => {
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
            draggable
            onDragEnd={(e) => {
              onMoveWidget(item.i, {
                x: e.clientX,
                y: e.clientY,
              });
            }}
          >
            <WidgetRenderer widget={widget} apiClient={apiClient} />
          </Box>
        );
      })}
    </Box>
  );
};

export default BuilderCanvas;
