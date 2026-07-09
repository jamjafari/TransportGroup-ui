import React from 'react';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Box,
} from '@mui/material';

import { BaseCardPropTypes, BaseCardDefaultProps } from './BaseCard.types';

const BaseCard = ({
  title,

  subtitle,

  icon,

  action,

  footer,

  children,

  elevation,
}) => {
  return (
    <Card
      elevation={elevation}
      sx={{
        borderRadius: 3,
        height: '100%',
      }}
    >
      {(title || subtitle || icon || action) && (
        <CardHeader
          avatar={icon}

          title={title}

          subheader={subtitle}

          action={action}
        />
      )}

      <Divider />

      <CardContent>
        <Box>{children}</Box>
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

BaseCard.propTypes = BaseCardPropTypes;

BaseCard.defaultProps = BaseCardDefaultProps;

export default React.memo(BaseCard);
