import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { BarChartWidget } from '../chartwidgets/BarChartWidget';

import useFuelConsumptionChart from './useFuelConsumptionChart';

const FuelConsumptionChart = () => {
  const { t } = useTranslation();
  const chart = useFuelConsumptionChart();

  return (
    <BarChartWidget
      title={t(chart.title)}

      subtitle={t(chart.subtitle)}

      categories={chart.categories}

      series={chart.series}

      height={320}
      tooltip
      legend
    />
  );
};

export default memo(FuelConsumptionChart);
