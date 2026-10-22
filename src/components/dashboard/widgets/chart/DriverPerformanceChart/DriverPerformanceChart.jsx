import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { BarChartWidget } from '../chartwidgets/BarChartWidget';

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
  const { t } = useTranslation();
  const chart = useDriverPerformanceChart();

  return (
    <BarChartWidget
      title={title ? t(title) : t(chart.title)}

      subtitle={subtitle ? t(subtitle) : t(chart.subtitle)}

      categories={chart.categories}

      series={chart.series}

      height={height}
    />
  );
};

DriverPerformanceChart.propTypes = DriverPerformanceChartPropTypes;

DriverPerformanceChart.defaultProps = DriverPerformanceChartDefaultProps;

export default memo(DriverPerformanceChart);
