import React, { memo } from 'react';

import { BarChartWidget } from '../chartwidgets/BarChartWidget';

import useFuelConsumptionChart from './useFuelConsumptionChart';

const FuelConsumptionChart = () => {
  const chart = useFuelConsumptionChart();

  return (
    <BarChartWidget
      title={chart.title}

      subtitle={chart.subtitle}

      categories={chart.categories}

      series={chart.series}

      height={320}
    />
  );
};

export default memo(FuelConsumptionChart);
