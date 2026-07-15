import React from 'react';

import { Box, Typography, Divider } from '@mui/material';

import Stack from '@mui/system/Stack';

import { BaseCard } from '../../../common/cards/BaseCard';

import { InfoCardPropTypes, InfoCardDefaultProps } from './DashboardCard.types';

const InfoCard = ({
  title,

  subtitle,

  icon,

  items = [],

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
      <Stack spacing={1}>
        {items.map((item, index) => (
          <React.Fragment key={item.key || index}>
            <Box
              display="flex"

              justifyContent="space-between"

              alignItems="center"
            >
              <Typography
                variant="body2"

                color="text.secondary"
              >
                {item.label}
              </Typography>

              <Typography
                variant="body2"

                fontWeight={600}
              >
                {item.value}
              </Typography>
            </Box>

            {index !== items.length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </Stack>
    </BaseCard>
  );
};

InfoCard.propTypes = InfoCardPropTypes;

InfoCard.defaultProps = InfoCardDefaultProps;

export default React.memo(InfoCard);
