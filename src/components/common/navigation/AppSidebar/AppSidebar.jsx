import React, { memo } from 'react';

import { Box, Toolbar } from '@mui/material';

import AppMenu from '../AppMenu';

import {
  AppSidebarPropTypes,
  AppSidebarDefaultProps,
} from './AppSidebar.types';

const AppSidebar = ({ items, collapsed, header, footer }) => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      {header && <Toolbar>{header}</Toolbar>}

      <Box flex={1} overflow="auto">
        <AppMenu items={items} collapsed={collapsed} />
      </Box>

      {footer && <Box>{footer}</Box>}
    </Box>
  );
};

AppSidebar.propTypes = AppSidebarPropTypes;

AppSidebar.defaultProps = AppSidebarDefaultProps;

export default memo(AppSidebar);
