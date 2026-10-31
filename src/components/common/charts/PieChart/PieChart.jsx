import React, { memo } from 'react';

import { Box } from '@mui/material';
import LtrScope from '@/components/common/utility/LtrScope';

import {
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from 'recharts';

import { PieChartPropTypes, PieChartDefaultProps } from './PieChart.types';
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

const PieChart = ({
  labels = [],

  series = [],

  height,

  legend,

  tooltip,
}) => {
  const translateLabel = useChartLabel();
  const direction = useChartDirection();

  const data = labels.map((label, index) => ({
    name: translateLabel(label),

    value: series[index],
  }));

  return (
    <LtrScope width="100%" height={380}>
      <ResponsiveContainer width="100%" height="100%">
        <RechartsPieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            startAngle={direction.startAngle}
            endAngle={direction.endAngle}
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
                  fontSize={14}
                  fontWeight={400}
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

          {tooltip && (
            <Tooltip contentStyle={{ direction: direction.textDirection }} />
          )}

          {legend && (
            <Legend
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ direction: direction.textDirection }}
            />
          )}
        </RechartsPieChart>
      </ResponsiveContainer>
    </LtrScope>
  );
};

PieChart.propTypes = PieChartPropTypes;

PieChart.defaultProps = PieChartDefaultProps;

export default memo(PieChart);
