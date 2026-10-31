import React, { memo } from 'react';
import LtrScope from '@/components/common/utility/LtrScope';

import {
  ResponsiveContainer,
  LineChart as ReLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

import { Box } from '@mui/material';

import { LineChartPropTypes, LineChartDefaultProps } from './LineChart.types';
import useChartLabel from '../hooks/useChartLabel';
import useChartDirection from '../hooks/useChartDirection';

const LineChart = ({
  categories = [],

  series = [],

  height,

  grid,

  legend,

  tooltip,
}) => {
  const label = useChartLabel();
  const direction = useChartDirection();

  // ✅ مثل BarChart و AreaChart: داده‌ها «جدیدترین اول» می‌رسند و برای نمایش زمانی برگردانده می‌شوند
  const data = categories
    .map((category, index) => {
      const item = {
        category,
      };

      series.forEach((s) => {
        item[s.name] = s.data[index];
      });

      return item;
    })
    .reverse();

  return (
    <LtrScope width="100%" height={380}>
      <ResponsiveContainer width="100%" height="100%">
        <ReLineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="3 3" />}

          <XAxis
            dataKey="category"
            interval={2}
            tick={{ fontSize: 16, fontWeight: 400 }}
            tickFormatter={label}
            reversed={direction.xReversed}
          />

          <YAxis
            tick={{ fontSize: 16, fontWeight: 400 }}
            orientation={direction.yOrientation}
            mirror={false}
            width={60}
            tickMargin={15}
            axisLine={true}
            tickLine={true}
          />
          {tooltip && (
            <Tooltip
              labelFormatter={label}
              contentStyle={{ direction: direction.textDirection }}
            />
          )}

          {legend && (
            <Legend wrapperStyle={{ direction: direction.textDirection }} />
          )}

          {series.map((item, index) => (
            <Line
              key={item.name}

              type="monotone"

              dataKey={item.name}

              name={label(item.name)}

              stroke={
                item.color ||
                ['#1976d2', '#2e7d32', '#ed6c02', '#9c27b0', '#d32f2f'][
                  index % 5
                ]
              }

              strokeWidth={2}

              dot={false}

              activeDot={{
                r: 5,
              }}
            />
          ))}
        </ReLineChart>
      </ResponsiveContainer>
    </LtrScope>
  );
};

LineChart.propTypes = LineChartPropTypes;

LineChart.defaultProps = LineChartDefaultProps;

export default memo(LineChart);
