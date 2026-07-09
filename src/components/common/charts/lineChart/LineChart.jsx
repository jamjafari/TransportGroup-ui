import React, { memo } from 'react';

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

const LineChart = ({
  categories,

  series,

  height,

  grid,

  legend,

  tooltip,
}) => {
  const data = categories.map((category, index) => {
    const item = {
      category,
    };

    series.forEach((s) => {
      item[s.name] = s.data[index];
    });

    return item;
  });

  return (
    <Box width="100%" height={height}>
      <ResponsiveContainer>
        <ReLineChart data={data}>
          {grid && <CartesianGrid strokeDasharray="3 3" />}

          <XAxis dataKey="category" />

          <YAxis />

          {tooltip && <Tooltip />}

          {legend && <Legend />}

          {series.map((item, index) => (
            <Line
              key={item.name}

              type="monotone"

              dataKey={item.name}

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
    </Box>
  );
};

LineChart.propTypes = LineChartPropTypes;

LineChart.defaultProps = LineChartDefaultProps;

export default memo(LineChart);
