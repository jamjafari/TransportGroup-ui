import React, { memo } from 'react';

import AreaChartWidget from '../chartwidgets/AreaChartWidget';

import useMonthlyDistanceChart from './useMonthlyDistanceChart';

import {
  MonthlyDistanceChartPropTypes,
  MonthlyDistanceChartDefaultProps,
} from './MonthlyDistanceChart.types';

const MonthlyDistanceChart = ({
  title,

  subtitle,

  height,
}) => {
  const chart = useMonthlyDistanceChart();

  return (
    <AreaChartWidget
      title={title || chart.title}

      subtitle={subtitle || chart.subtitle}

      categories={chart.categories}

      series={chart.series}

      height={height}
    />
  );
};

MonthlyDistanceChart.propTypes = MonthlyDistanceChartPropTypes;

MonthlyDistanceChart.defaultProps = MonthlyDistanceChartDefaultProps;

export default memo(MonthlyDistanceChart);
