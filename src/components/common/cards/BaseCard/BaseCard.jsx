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
        width: '100%',
      }}
    >
      {(title || subtitle || icon || action) && (
        <CardHeader
          avatar={icon}

          title={title}

          subheader={subtitle}

          action={action}

          // ✅ پیش‌فرض MUI عنوان را h5 (24px، وزن 400) — یا با آیکون body2 (14px) — می‌کرد
          slotProps={{
            title: { variant: 'cardTitle' },
            subheader: { variant: 'cardSubtitle' },
          }}
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
