import React, { memo } from 'react';

import AreaChartWidget from '../widgets/AreaChartWidget';

import useVehicleUsageChart from './useVehicleUsageChart';

import {
  VehicleUsageChartPropTypes,
  VehicleUsageChartDefaultProps,
} from './VehicleUsageChart.types';

const VehicleUsageChart = ({
  title,

  subtitle,

  height,
}) => {
  const chart = useVehicleUsageChart();

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

VehicleUsageChart.propTypes = VehicleUsageChartPropTypes;

VehicleUsageChart.defaultProps = VehicleUsageChartDefaultProps;

export default memo(VehicleUsageChart);
