import React, { memo } from 'react';

import ChartCard from '../../card/ChartCard';

import {
  BaseCircularChartWidgetPropTypes,
  BaseCircularChartWidgetDefaultProps,
} from './BaseCircularChartWidget.types';

const BaseCircularChartWidget = ({
  title,

  subtitle,

  height,

  chartComponent: Chart,

  data,
}) => {
  return (
    <ChartCard
      title={title}

      subtitle={subtitle}

      height={height}

      chart={
        <Chart
          data={data}

          height={height}
        />
      }
    />
  );
};

BaseCircularChartWidget.propTypes = BaseCircularChartWidgetPropTypes;

BaseCircularChartWidget.defaultProps = BaseCircularChartWidgetDefaultProps;

export default memo(BaseCircularChartWidget);
