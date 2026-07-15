import React, { memo } from 'react';

import { IconButton, Tooltip } from '@mui/material';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useNavigate } from 'react-router-dom';

import {
  AppBackButtonPropTypes,
  AppBackButtonDefaultProps,
} from './AppBackButton.types';

const AppBackButton = ({
  fallback,

  tooltip,

  icon,

  onClick,

  ...rest
}) => {
  const navigate = useNavigate();
  const renderedIcon = icon ?? <ArrowBackIcon />;

  const handleClick = () => {
    if (onClick) {
      onClick();

      return;
    }

    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <Tooltip title={tooltip}>
      <IconButton
        onClick={handleClick}

        {...rest}
      >
        {icon || <ArrowBackIcon />}
      </IconButton>
    </Tooltip>
  );
};

AppBackButton.propTypes = AppBackButtonPropTypes;

AppBackButton.defaultProps = AppBackButtonDefaultProps;

export default memo(AppBackButton);
