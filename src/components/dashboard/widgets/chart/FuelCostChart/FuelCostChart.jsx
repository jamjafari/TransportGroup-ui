import React, { memo } from 'react';

import { AreaChartWidget } from '../chartwidgets/AreaChartWidget';

import useFuelCostChart from './useFuelCostChart';

const FuelCostChart = () => {
  const chart = useFuelCostChart();

  return (
    <AreaChartWidget
      title={chart.title}

      subtitle={chart.subtitle}

      categories={chart.categories}

      series={chart.series}
    />
  );
};

export default memo(FuelCostChart);
