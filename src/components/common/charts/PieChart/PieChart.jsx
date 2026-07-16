import React, { memo } from 'react';

import { Box } from '@mui/material';

import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

import { PieChartPropTypes, PieChartDefaultProps } from './PieChart.types';

const DEFAULT_COLORS = [
  '#1976d2',

  '#2e7d32',

  '#ed6c02',

  '#9c27b0',

  '#d32f2f',

  '#0288d1',

  '#6d4c41',

  '#00897b',
];

const PieChart = ({
  labels,

  series,

  height,

  legend,

  tooltip,
}) => {
  const data = labels.map((label, index) => ({
    name: label,

    value: series[index],
  }));

  return (
    <Box
      width="100%"

      height={320}
    >
      <ResponsiveContainer>
        <RechartsPieChart>
          <Pie
            data={data}

            dataKey="value"

            nameKey="name"

            outerRadius="80%"

            label
          >
            {data.map((_, index) => (
              <Cell
                key={index}

                fill={DEFAULT_COLORS[index % DEFAULT_COLORS.length]}
              />
            ))}
          </Pie>

          {tooltip && <Tooltip />}

          {legend && <Legend />}
        </RechartsPieChart>
      </ResponsiveContainer>
    </Box>
  );
};

PieChart.propTypes = PieChartPropTypes;

PieChart.defaultProps = PieChartDefaultProps;

export default memo(PieChart);
