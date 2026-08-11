import React, { memo, useMemo } from 'react';

import { Box } from '@mui/material';
import LtrScope from '@/components/common/utility/LtrScope';

import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { BarChartPropTypes, BarChartDefaultProps } from './BarChart.types';

const DEFAULT_COLORS = [
  '#1976d2',

  '#2e7d32',

  '#ed6c02',

  '#9c27b0',

  '#d32f2f',

  '#0288d1',
];

const BarChart = ({
  categories = [],

  series = [],

  height,

  grid,

  legend,

  tooltip,
}) => {
  const chartData = useMemo(
    () =>
      categories.map((category, index) => {
        const row = {
          category,
        };

        series.forEach((item) => {
          row[item.name] = item.data[index];
        });

        return row;
      }),
    [categories, series],
  );

  return (
    <LtrScope width="100%" height={380}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={chartData}>
          {grid && <CartesianGrid strokeDasharray="3 3" />}

          <XAxis dataKey="category" />

          <YAxis />

          {tooltip && <Tooltip />}

          {legend && <Legend />}

          {series.map((item, index) => (
            <Bar
              key={item.name}

              dataKey={item.name}

              fill={item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length]}

              radius={[6, 6, 0, 0]}
            />
          ))}
        </RechartsBarChart>
      </ResponsiveContainer>
    </LtrScope>
  );
};

BarChart.propTypes = BarChartPropTypes;

BarChart.defaultProps = BarChartDefaultProps;

export default memo(BarChart);
