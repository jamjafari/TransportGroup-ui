import React, { memo } from 'react';

import { BarChartWidget } from '../chartwidgets/BarChartWidget';

import useMissionChart from './useMissionChart';

import {
  MissionChartPropTypes,
  MissionChartDefaultProps,
} from './MissionChart.types';

const MissionChart = ({
  title,

  subtitle,

  height,
}) => {
  const chart = useMissionChart();

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

MissionChart.propTypes = MissionChartPropTypes;

MissionChart.defaultProps = MissionChartDefaultProps;

export default memo(MissionChart);
