import React, { memo } from 'react';

import { Card, CardContent, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import AppLinearProgress from './AppLinearProgress';

import {
  ProgressCardPropTypes,
  ProgressCardDefaultProps,
} from './ProgressCard.types';

const ProgressCard = ({ title, value, color }) => {
  return (
    <Card elevation={0}>
      <CardContent>
        <Stack spacing={2}>
          <Typography variant="subtitle1" fontWeight={600}>
            {title}
          </Typography>

          <AppLinearProgress value={value} color={color} />
        </Stack>
      </CardContent>
    </Card>
  );
};

ProgressCard.propTypes = ProgressCardPropTypes;

ProgressCard.defaultProps = ProgressCardDefaultProps;

export default memo(ProgressCard);
