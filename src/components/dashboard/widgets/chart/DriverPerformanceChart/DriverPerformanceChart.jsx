import React, { memo } from 'react';

import BarChartWidget from '../chartwidgets/BarChartWidget';

import useDriverPerformanceChart from './useDriverPerformanceChart';

import {
  DriverPerformanceChartPropTypes,
  DriverPerformanceChartDefaultProps,
} from './DriverPerformanceChart.types';

const DriverPerformanceChart = ({
  title,

  subtitle,

  height,
}) => {
  const chart = useDriverPerformanceChart();

  return (
    <BarChartWidget
      title={title || chart.title}

      subtitle={subtitle || chart.subtitle}

      categories={chart.categories}

      series={chart.series}

      height={height}
    />
  );
};

DriverPerformanceChart.propTypes = DriverPerformanceChartPropTypes;

DriverPerformanceChart.defaultProps = DriverPerformanceChartDefaultProps;

export default memo(DriverPerformanceChart);
