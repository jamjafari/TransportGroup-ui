import { useState, useCallback } from 'react';

import { createDashboard } from './dashboardEngine';

const useDashboard = (initialDashboard) => {
  const [dashboard, setDashboard] = useState(
    initialDashboard ||
      createDashboard({
        id: Date.now(),
        title: 'New Dashboard',
      }),
  );

  const addWidget = useCallback((widget) => {
    setDashboard((prev) => ({
      ...prev,

      widgets: [...prev.widgets, widget],
    }));
  }, []);

  const updateLayout = useCallback((layout) => {
    setDashboard((prev) => ({
      ...prev,

      layout,
    }));
  }, []);

  const removeWidget = useCallback((id) => {
    setDashboard((prev) => ({
      ...prev,

      widgets: prev.widgets.filter((w) => w.id !== id),
    }));
  }, []);

  return {
    dashboard,

    setDashboard,

    addWidget,

    removeWidget,

    updateLayout,
  };
};

export default useDashboard;
