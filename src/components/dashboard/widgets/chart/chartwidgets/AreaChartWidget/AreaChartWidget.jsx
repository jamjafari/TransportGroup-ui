import React, { memo } from 'react';

import AreaChart from '../../../../../common/charts/AreaChart';

import BaseChartWidget from '../../BaseChartWidget';

const AreaChartWidget = (props) => {
  return (
    <BaseChartWidget
      {...props}

      chartComponent={AreaChart}
    />
  );
};

export default memo(AreaChartWidget);
