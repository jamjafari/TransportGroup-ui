import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { AreaChartWidget } from '../chartwidgets/AreaChartWidget';

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
  const { t } = useTranslation();
  const chart = useMonthlyDistanceChart();

  return (
    <AreaChartWidget
      title={title ? t(title) : t(chart.title)}

      subtitle={subtitle ? t(subtitle) : t(chart.subtitle)}

      categories={chart.categories}

      series={chart.series}

      height={height}
    />
  );
};

MonthlyDistanceChart.propTypes = MonthlyDistanceChartPropTypes;

MonthlyDistanceChart.defaultProps = MonthlyDistanceChartDefaultProps;

export default memo(MonthlyDistanceChart);
