import React, { memo, useMemo } from 'react';

import { Box } from '@mui/material';
import LtrScope from '@/components/common/utility/LtrScope';

import {
  ResponsiveContainer,
  AreaChart as RechartsAreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts';

import { AreaChartPropTypes, AreaChartDefaultProps } from './AreaChart.types';

const DEFAULT_COLORS = [
  '#1976d2',

  '#2e7d32',

  '#ed6c02',

  '#9c27b0',

  '#d32f2f',

  '#0288d1',
];

const AreaChart = ({
  categories,

  series,

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
  // console.log('categories in v u ch', categories);

  // console.log('series', series);

  // console.log('height', height);
  return (
    <LtrScope width="100%" height={380}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsAreaChart data={chartData}>
          {grid && <CartesianGrid strokeDasharray="3 3" />}

          <XAxis dataKey="category" />

          <YAxis />

          {tooltip && <Tooltip />}

          {legend && <Legend />}

          {series.map((item, index) => (
            <Area
              key={item.name}

              type="monotone"

              dataKey={item.name}

              stroke={
                item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length]
              }

              fill={item.color || DEFAULT_COLORS[index % DEFAULT_COLORS.length]}

              fillOpacity={0.25}

              strokeWidth={2}
            />
          ))}
        </RechartsAreaChart>
      </ResponsiveContainer>
    </LtrScope>
  );
};

AreaChart.propTypes = AreaChartPropTypes;

AreaChart.defaultProps = AreaChartDefaultProps;

export default memo(AreaChart);
