import React, { memo } from 'react';

import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';

import { AppNavbarPropTypes, AppNavbarDefaultProps } from './AppNavbar.types';

const AppNavbar = ({
  title,
  onMenuClick,
  startAdornment,
  endAdornment,
  showMenuButton,
}) => {
  return (
    <AppBar position="sticky" color="inherit" elevation={1}>
      <Toolbar>
        {showMenuButton && (
          <IconButton edge="start" onClick={onMenuClick} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
        )}

        {startAdornment}

        <Typography
          variant="h6"
          noWrap
          sx={{
            flexGrow: 1,
          }}
        >
          {title}
        </Typography>

        <Box>{endAdornment}</Box>
      </Toolbar>
    </AppBar>
  );
};

AppNavbar.propTypes = AppNavbarPropTypes;

AppNavbar.defaultProps = AppNavbarDefaultProps;

export default memo(AppNavbar);
