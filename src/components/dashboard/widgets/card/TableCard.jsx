import React from 'react';

import { Box } from '@mui/material';

import { BaseCard } from '../../../common/cards/BaseCard';

import {
  TableCardPropTypes,
  TableCardDefaultProps,
} from './DashboardCard.types';

const TableCard = ({
  title,

  subtitle,

  icon,

  action,

  footer,

  children,

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
          width: '100%',

          height,

          overflow: 'auto',
        }}
      >
        {children}
      </Box>
    </BaseCard>
  );
};

TableCard.propTypes = TableCardPropTypes;

TableCard.defaultProps = TableCardDefaultProps;

export default React.memo(TableCard);
