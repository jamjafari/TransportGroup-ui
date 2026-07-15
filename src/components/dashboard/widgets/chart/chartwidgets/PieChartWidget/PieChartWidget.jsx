import React, { memo } from 'react';

import { PieChart } from '@/components/common/charts/PieChart';

import { BaseChartWidget } from '../../BaseChartWidget';

const PieChartWidget = (props) => {
  return (
    <BaseChartWidget
      {...props}

      chartComponent={PieChart}
    />
  );
};

export default memo(PieChartWidget);
