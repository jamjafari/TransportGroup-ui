import React, { memo } from 'react';

import { AreaChartWidget } from '../chartwidgets/AreaChartWidget';

import useExpenseChart from './useExpenseChart';

import {
  ExpenseChartPropTypes,
  ExpenseChartDefaultProps,
} from './ExpenseChart.types';

const ExpenseChart = ({
  title,

  subtitle,

  height,
}) => {
  const chart = useExpenseChart();

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

ExpenseChart.propTypes = ExpenseChartPropTypes;

ExpenseChart.defaultProps = ExpenseChartDefaultProps;

export default memo(ExpenseChart);
