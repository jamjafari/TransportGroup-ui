import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

import { AreaChartWidget } from '../chartwidgets/AreaChartWidget';

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
  const { t } = useTranslation();
  const chart = useVehicleUsageChart();

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

VehicleUsageChart.propTypes = VehicleUsageChartPropTypes;

VehicleUsageChart.defaultProps = VehicleUsageChartDefaultProps;

export default memo(VehicleUsageChart);
