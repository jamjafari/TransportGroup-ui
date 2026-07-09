import React, { memo } from 'react';

import LineChart from '../../../../common/charts/LineChart';

import BaseChartWidget from '../../BaseChartWidget';

const BarChartWidget = (props) => {
  return (
    <BaseChartWidget
      {...props}

      chartComponent={LineChart}
    />
  );
};

export default memo(LineChartWidget);
