import React, { memo } from 'react';

import ChartCard from '../../card/ChartCard';

import {
  BaseChartWidgetPropTypes,
  BaseChartWidgetDefaultProps,
} from './BaseChartWidget.types';

const BaseChartWidget = (props) => {
  const {
    title,

    subtitle,

    height,

    chartComponent: Chart,

    categories,

    series,
  } = props;

  return (
    <ChartCard
      title={title}

      subtitle={subtitle}

      height={height}

      chart={
        <Chart
          categories={categories}

          series={series}

          height={height}
        />
      }
    />
  );
};

BaseChartWidget.propTypes = BaseChartWidgetPropTypes;

BaseChartWidget.defaultProps = BaseChartWidgetDefaultProps;

export default memo(BaseChartWidget);
