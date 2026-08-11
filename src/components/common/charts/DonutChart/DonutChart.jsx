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
  return (
    <LtrScope width="100%" height={380}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}

            dataKey="value"

            nameKey="label"

            innerRadius={70}

            outerRadius={110}

            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell
                key={entry.label}

                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          {tooltip && <Tooltip />}

          {legend && <Legend />}
        </PieChart>
      </ResponsiveContainer>
    </LtrScope>
  );
};

DonutChart.propTypes = DonutChartPropTypes;

DonutChart.defaultProps = DonutChartDefaultProps;

export default memo(DonutChart);
