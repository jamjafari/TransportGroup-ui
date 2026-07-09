import React, { memo } from 'react';

import { Link as MuiLink } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { AppLinkPropTypes, AppLinkDefaultProps } from './AppLink.types';

const AppLink = ({
  to,

  external,

  underline,

  color,

  children,

  ...rest
}) => {
  if (external) {
    return (
      <MuiLink
        href={to}

        underline={underline}

        color={color}

        target="_blank"

        rel="noopener noreferrer"

        {...rest}
      >
        {children}
      </MuiLink>
    );
  }

  return (
    <MuiLink
      component={RouterLink}

      to={to}

      underline={underline}

      color={color}

      {...rest}
    >
      {children}
    </MuiLink>
  );
};

AppLink.propTypes = AppLinkPropTypes;

AppLink.defaultProps = AppLinkDefaultProps;

export default memo(AppLink);
