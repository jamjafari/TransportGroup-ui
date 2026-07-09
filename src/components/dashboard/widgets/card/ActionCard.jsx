import React from 'react';

import { Stack, Button, Typography } from '@mui/material';

import BaseCard from '../../../common/cards/BaseCard';

import {
  ActionCardPropTypes,
  ActionCardDefaultProps,
} from './DashboardCard.types';

const ActionCard = ({
  title,

  subtitle,

  icon,

  description,

  actions,
}) => {
  return (
    <BaseCard
      title={title}

      subtitle={subtitle}

      icon={icon}
    >
      <Stack spacing={2}>
        {description && (
          <Typography
            variant="body2"

            color="text.secondary"
          >
            {description}
          </Typography>
        )}

        <Stack
          direction="row"

          spacing={1}

          flexWrap="wrap"

          useFlexGap
        >
          {actions.map((action) => (
            <Button
              key={action.id}

              variant={action.variant || 'contained'}

              color={action.color || 'primary'}

              size="small"

              startIcon={action.icon}

              onClick={action.onClick}
            >
              {action.label}
            </Button>
          ))}
        </Stack>
      </Stack>
    </BaseCard>
  );
};

ActionCard.propTypes = ActionCardPropTypes;

ActionCard.defaultProps = ActionCardDefaultProps;

export default React.memo(ActionCard);
