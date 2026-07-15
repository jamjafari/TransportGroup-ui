import React, { memo } from 'react';

import { AreaChartWidget } from '../chartwidgets/AreaChartWidget';

import useFuelConsumptionChart from './useFuelConsumptionChart';

const FuelConsumptionChart = () => {
  const chart = useFuelConsumptionChart();

  return (
    <AreaChartWidget
      title={chart.title}

      subtitle={chart.subtitle}

      categories={chart.categories}

      series={chart.series}

      height={320}
    />
  );
};

export default memo(FuelConsumptionChart);
