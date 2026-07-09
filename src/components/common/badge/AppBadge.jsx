import React, { memo } from 'react';

import { Badge } from '@mui/material';

import { AppBadgePropTypes, AppBadgeDefaultProps } from './AppBadge.types';

const AppBadge = ({
  children,

  content,

  color,

  variant,

  max,

  invisible,

  overlap,

  anchorOrigin,
}) => {
  return (
    <Badge
      badgeContent={content}

      color={color}

      variant={variant}

      max={max}

      invisible={invisible}

      overlap={overlap}

      anchorOrigin={anchorOrigin}
    >
      {children}
    </Badge>
  );
};

AppBadge.propTypes = AppBadgePropTypes;

AppBadge.defaultProps = AppBadgeDefaultProps;

export default memo(AppBadge);
