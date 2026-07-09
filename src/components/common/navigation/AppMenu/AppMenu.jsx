import React, { memo } from 'react';

import { List } from '@mui/material';

import MenuItem from './MenuItem';

import { AppMenuPropTypes, AppMenuDefaultProps } from './AppMenu.types';

const AppMenu = ({ items, collapsed }) => {
  return (
    <List disablePadding>
      {items.map((item) => (
        <MenuItem key={item.id} item={item} collapsed={collapsed} />
      ))}
    </List>
  );
};

AppMenu.propTypes = AppMenuPropTypes;

AppMenu.defaultProps = AppMenuDefaultProps;

export default memo(AppMenu);
