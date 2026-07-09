import React, { useEffect, useState } from 'react';

import { resolveWidget } from './widgetResolver';

import { bindWidgetData } from './dataBinder';

const WidgetRenderer = ({ widget, apiClient }) => {
  const [data, setData] = useState(null);

  const Component = resolveWidget(widget);

  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      const result = await bindWidgetData({
        widget,
        apiClient,
      });

      if (mounted) {
        setData(result);
      }
    };

    loadData();

    return () => {
      mounted = false;
    };
  }, [widget, apiClient]);

  return <Component {...widget.config} data={data} />;
};

export default WidgetRenderer;
