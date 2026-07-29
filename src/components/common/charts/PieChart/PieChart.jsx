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

const PieChart = ({
  labels = [],

  series = [],

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

      height={380}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={90}
            labelLine={true}
            label={({ name, percent, cx, cy, midAngle, outerRadius }) => {
              const RADIAN = Math.PI / 180;

              const x = cx + (outerRadius + 80) * Math.cos(-midAngle * RADIAN);

              const y = cy + (outerRadius + 40) * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  fill="#333"
                  textAnchor={x > cx ? 'start' : 'end'}
                  dominantBaseline="central"
                  fontSize={12}
                >
                  {`${name} (${(percent * 100).toFixed(0)}%)`}
                </text>
              );
            }}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {tooltip && <Tooltip />}

          {legend && (
            <Legend layout="horizontal" verticalAlign="bottom" align="center" />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
    </Box>
  );
};

PieChart.propTypes = PieChartPropTypes;

PieChart.defaultProps = PieChartDefaultProps;

export default memo(PieChart);
