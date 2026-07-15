import React from 'react';

import { Box, Chip, Typography } from '@mui/material';

import Stack from '@mui/system/Stack';

import { BaseCard } from '../../../common/cards/BaseCard';

import {
  StatusCardPropTypes,
  StatusCardDefaultProps,
} from './DashboardCard.types';

const StatusCard = ({
  title,

  subtitle,

  icon,

  status,

  color,

  description,

  footer,

  action,
}) => {
  return (
    <BaseCard
      title={title}

      subtitle={subtitle}

      icon={icon}

      footer={footer}

      action={action}
    >
      <Stack spacing={2}>
        <Box>
          <Chip
            label={status}

            color={color}

            size="medium"
          />
        </Box>

        {description && (
          <Typography
            variant="body2"

            color="text.secondary"
          >
            {description}
          </Typography>
        )}
      </Stack>
    </BaseCard>
  );
};

StatusCard.propTypes = StatusCardPropTypes;

StatusCard.defaultProps = StatusCardDefaultProps;

export default React.memo(StatusCard);
