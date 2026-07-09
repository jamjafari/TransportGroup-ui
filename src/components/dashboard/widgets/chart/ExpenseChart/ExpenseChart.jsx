import React, { memo } from 'react';

import LineChartWidget from '../chartwidgets/LineChartWidget';

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
    <LineChartWidget
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
