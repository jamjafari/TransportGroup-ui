import React from 'react';

import { Stack, Alert, AlertTitle } from '@mui/material';

import BaseCard from '../../../common/cards/BaseCard';

import {
  AlertCardPropTypes,
  AlertCardDefaultProps,
} from './DashboardCard.types';

const AlertCard = ({
  title,

  subtitle,

  icon,

  alerts,

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
        {alerts.map((item) => (
          <Alert
            key={item.id}

            severity={item.severity || 'info'}

            variant="outlined"
          >
            {item.title && <AlertTitle>{item.title}</AlertTitle>}

            {item.message}
          </Alert>
        ))}
      </Stack>
    </BaseCard>
  );
};

AlertCard.propTypes = AlertCardPropTypes;

AlertCard.defaultProps = AlertCardDefaultProps;

export default React.memo(AlertCard);
