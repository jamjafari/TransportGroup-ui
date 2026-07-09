import React, { memo } from 'react';

import DonutChart from '../../../../common/charts/DonutChart';

import BaseCircularChartWidget from '../../BaseCircularChartWidget';

const DonutChartWidget = (props) => {
  return (
    <BaseCircularChartWidget
      {...props}

      chartComponent={DonutChart}
    />
  );
};

export default memo(DonutChartWidget);
