import React, { memo } from 'react';

import { LineChart } from '@/components/common/charts/LineChart';

import { BaseChartWidget } from '../../BaseChartWidget';

const LineChartWidget = (props) => {
  return (
    <BaseChartWidget
      {...props}

      chartComponent={LineChart}
    />
  );
};

export default memo(LineChartWidget);
