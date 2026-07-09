import React, { memo } from 'react';

import { Drawer } from '@mui/material';

import AppSidebar from '../AppSidebar';

import { AppDrawerPropTypes, AppDrawerDefaultProps } from './AppDrawer.types';

const DRAWER_WIDTH = 280;

const AppDrawer = ({
  open,
  onClose,
  variant,
  width,
  items,
  collapsed,
  header,
  footer,
}) => {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      variant={variant}
      sx={{
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
        },
      }}
    >
      <AppSidebar
        items={items}
        collapsed={collapsed}
        header={header}
        footer={footer}
      />
    </Drawer>
  );
};

AppDrawer.propTypes = AppDrawerPropTypes;

AppDrawer.defaultProps = AppDrawerDefaultProps;

export default memo(AppDrawer);
