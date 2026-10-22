import React, { memo } from 'react';

import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const chart = useMissionChart();

  return (
    <BarChartWidget
      title={title ? t(title) : t(chart.title)}

      subtitle={subtitle ? t(subtitle) : t(chart.subtitle)}

      categories={chart.categories}

      series={chart.series}

      height={height}
    />
  );
};

MissionChart.propTypes = MissionChartPropTypes;

MissionChart.defaultProps = MissionChartDefaultProps;

export default memo(MissionChart);
