import React, { memo } from 'react';

import DonutChartWidget from '../chartwidgets/DonutChartWidget';

import useVehicleStatusChart from './useVehicleStatusChart';

import {
  VehicleStatusChartPropTypes,
  VehicleStatusChartDefaultProps,
} from './VehicleStatusChart.types';

const VehicleStatusChart = ({
  title,

  subtitle,

  height,
}) => {
  const chart = useVehicleStatusChart();

  return (
    <DonutChartWidget
      title={title || chart.title}

      subtitle={subtitle || chart.subtitle}

      data={chart.data}

      height={height}
    />
  );
};

VehicleStatusChart.propTypes = VehicleStatusChartPropTypes;

VehicleStatusChart.defaultProps = VehicleStatusChartDefaultProps;

export default memo(VehicleStatusChart);
