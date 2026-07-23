import React, { memo } from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Skeleton,
  Typography,
  Box,
} from '@mui/material';

import { AppCardPropTypes } from './AppCard.types';

const AppCard = ({
  title,

  subtitle,

  icon,

  actions,

  footer,

  loading = false,

  elevation = 0,

  sx,

  children,
}) => {
  return (
    <Card
      elevation={elevation}

      sx={{
        height: '100%',

        display: 'flex',

        flexDirection: 'column',

        ...sx,
      }}
    >
      {(title || subtitle || icon || actions) && (
        <>
          <CardHeader
            avatar={icon}

            title={
              <Typography
                variant="h6"

                fontWeight={600}
              >
                {title}
              </Typography>
            }

            subheader={subtitle}

            action={actions}
          />

          <Divider />
        </>
      )}

      <CardContent
        sx={{
          flexGrow: 1,
          alignItems: 'right',
          direction: 'rtl',
        }}
      >
        {loading ? (
          <Box
            sx={{
              alignItems: 'right',
              direction: 'rtl',
            }}
          >
            <Skeleton
              variant="text"

              height={40}
            />

            <Skeleton
              variant="rounded"

              height={120}
            />
          </Box>
        ) : (
          children
        )}
      </CardContent>

      {footer && (
        <>
          <Divider />

          <CardActions>{footer}</CardActions>
        </>
      )}
    </Card>
  );
};

AppCard.propTypes = AppCardPropTypes;

export default memo(AppCard);
