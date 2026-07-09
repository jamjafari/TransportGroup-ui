import { useState } from 'react';

import { updateLayoutItem } from './layoutManager';

const useBuilder = (initialDashboard) => {
  const [dashboard, setDashboard] = useState(initialDashboard);

  const moveWidget = (widgetId, position) => {
    setDashboard((prev) => ({
      ...prev,

      layout: updateLayoutItem(prev.layout, widgetId, position),
    }));
  };

  const addWidget = (widget, layoutItem) => {
    setDashboard((prev) => ({
      ...prev,

      widgets: [...prev.widgets, widget],

      layout: [...prev.layout, layoutItem],
    }));
  };

  return {
    dashboard,

    setDashboard,

    moveWidget,

    addWidget,
  };
};

export default useBuilder;
