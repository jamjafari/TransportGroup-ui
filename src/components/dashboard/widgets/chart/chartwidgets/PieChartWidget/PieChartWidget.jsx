import React, { memo } from 'react';

import PieChart from '../../../../common/charts/PieChart';

import BaseChartWidget from '../../BaseChartWidget';

const BarChartWidget = (props) => {
  return (
    <BaseChartWidget
      {...props}

      chartComponent={PieChart}
    />
  );
};

export default memo(PieChartWidget);
