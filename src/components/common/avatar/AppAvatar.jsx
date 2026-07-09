import React, { memo } from 'react';

import { Avatar, Badge, Tooltip } from '@mui/material';

import { AppAvatarPropTypes, AppAvatarDefaultProps } from './AppAvatar.types';

const AppAvatar = ({ src, alt, name, size, badge, badgeColor, tooltip }) => {
  const avatar = (
    <Avatar
      src={src}
      alt={alt}
      sx={{
        width: size,
        height: size,
      }}
    >
      {!src &&
        name
          ?.trim()
          ?.split(' ')
          ?.map((word) => word[0])
          ?.join('')
          ?.substring(0, 2)
          ?.toUpperCase()}
    </Avatar>
  );

  const content = badge ? (
    <Badge
      overlap="circular"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      color={badgeColor}
      variant="dot"
    >
      {avatar}
    </Badge>
  ) : (
    avatar
  );

  if (!tooltip) return content;

  return <Tooltip title={tooltip}>{content}</Tooltip>;
};

AppAvatar.propTypes = AppAvatarPropTypes;

AppAvatar.defaultProps = AppAvatarDefaultProps;

export default memo(AppAvatar);
