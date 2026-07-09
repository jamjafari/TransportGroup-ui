import React, { memo } from 'react';

import BarChart from '../../../../common/charts/BarChart';

import BaseChartWidget from '../../BaseChartWidget';

const BarChartWidget = (props) => {
  return (
    <BaseChartWidget
      {...props}

      chartComponent={BarChart}
    />
  );
};

export default memo(BarChartWidget);
