import React from 'react';

import { Box, Typography } from '@mui/material';

import BaseCard from '../../../common/cards/BaseCard';

import {
  ChartCardPropTypes,
  ChartCardDefaultProps,
} from './DashboardCard.types';

const ChartCard = ({
  title,

  subtitle,

  icon,

  action,

  footer,

  chart,

  height,
}) => {
  return (
    <BaseCard
      title={title}

      subtitle={subtitle}

      icon={icon}

      action={action}

      footer={footer}
    >
      <Box
        sx={{
          height,

          width: '100%',
        }}
      >
        {chart}
      </Box>
    </BaseCard>
  );
};

ChartCard.propTypes = ChartCardPropTypes;

ChartCard.defaultProps = ChartCardDefaultProps;

export default React.memo(ChartCard);
