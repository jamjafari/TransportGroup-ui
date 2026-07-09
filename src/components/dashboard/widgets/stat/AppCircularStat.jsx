import React from 'react';

import {
  Card,
  CardContent,
  Box,
  Typography,
  CircularProgress,
} from '@mui/material';

import {
  AppCircularStatPropTypes,
  AppCircularStatDefaultProps,
} from './AppStat.types';

const AppCircularStat = ({
  title,

  value,

  size = 90,

  thickness = 5,

  color = 'primary',

  subtitle,
}) => {
  const progress = Math.max(0, Math.min(100, Number(value)));

  return (
    <Card>
      <CardContent>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          mb={2}
        >
          {title}
        </Typography>

        <Box
          display="flex"

          justifyContent="center"

          alignItems="center"

          position="relative"
        >
          <CircularProgress
            variant="determinate"

            value={progress}

            size={size}

            thickness={thickness}

            color={color}
          />

          <Box
            position="absolute"

            display="flex"

            justifyContent="center"

            alignItems="center"
          >
            <Typography
              variant="h6"

              fontWeight={700}
            >
              {progress}%
            </Typography>
          </Box>
        </Box>

        {subtitle && (
          <Typography
            mt={2}

            variant="caption"

            color="text.secondary"

            align="center"

            display="block"
          >
            {subtitle}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
AppCircularStat.propTypes = AppCircularStatPropTypes;

AppCircularStat.defaultProps = AppCircularStatDefaultProps;

export default React.memo(AppCircularStat);
