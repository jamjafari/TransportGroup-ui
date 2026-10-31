import React, { memo } from 'react';

import { Box } from '@mui/material';
import LtrScope from '@/components/common/utility/LtrScope';

import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

import {
  DonutChartPropTypes,
  DonutChartDefaultProps,
} from './DonutChart.types';
import useChartLabel from '../hooks/useChartLabel';
import useChartDirection from '../hooks/useChartDirection';

const COLORS = [
  '#1976d2',

  '#2e7d32',

  '#ed6c02',

  '#9c27b0',

  '#d32f2f',

  '#0288d1',

  '#6d4c41',

  '#00897b',
];

const DonutChart = ({
  data,

  height,

  legend,

  tooltip,
}) => {
  const label = useChartLabel();
  const direction = useChartDirection();

  const chartData = data.map((entry) => ({
    ...entry,

    label: label(entry.label),
  }));

  return (
    <LtrScope width="100%" height={380}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}

            dataKey="value"

            nameKey="label"

            startAngle={direction.startAngle}

            endAngle={direction.endAngle}

            innerRadius={70}

            outerRadius={110}

            paddingAngle={2}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={entry.label}

                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          {tooltip && (
            <Tooltip contentStyle={{ direction: direction.textDirection }} />
          )}

          {legend && (
            <Legend wrapperStyle={{ direction: direction.textDirection }} />
          )}
        </PieChart>
      </ResponsiveContainer>
    </LtrScope>
  );
};

DonutChart.propTypes = DonutChartPropTypes;

DonutChart.defaultProps = DonutChartDefaultProps;

export default memo(DonutChart);
