import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const chart = useExpenseChart();

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

ExpenseChart.propTypes = ExpenseChartPropTypes;

ExpenseChart.defaultProps = ExpenseChartDefaultProps;

export default memo(ExpenseChart);
