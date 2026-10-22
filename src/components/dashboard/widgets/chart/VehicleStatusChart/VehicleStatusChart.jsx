import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { DonutChartWidget } from '../chartwidgets/DonutChartWidget';

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
  const { t } = useTranslation();
  const chart = useVehicleStatusChart();

  return (
    <DonutChartWidget
      title={title ? t(title) : t(chart.title)}

      subtitle={subtitle ? t(subtitle) : t(chart.subtitle)}

      data={chart.data}

      height={height}
    />
  );
};

VehicleStatusChart.propTypes = VehicleStatusChartPropTypes;

VehicleStatusChart.defaultProps = VehicleStatusChartDefaultProps;

export default memo(VehicleStatusChart);
