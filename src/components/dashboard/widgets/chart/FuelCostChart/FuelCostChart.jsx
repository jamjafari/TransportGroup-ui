import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { AreaChartWidget } from '../chartwidgets/AreaChartWidget';

import useFuelCostChart from './useFuelCostChart';

const FuelCostChart = () => {
  const { t } = useTranslation();
  const chart = useFuelCostChart();

  return (
    <AreaChartWidget
      title={t(chart.title)}

      subtitle={t(chart.subtitle)}

      categories={chart.categories}

      series={chart.series}
    />
  );
};

export default memo(FuelCostChart);
