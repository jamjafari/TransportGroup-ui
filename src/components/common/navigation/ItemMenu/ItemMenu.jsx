import React, { memo } from 'react';

import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';

import { ItemMenuPropTypes, ItemMenuDefaultProps } from './ItemMenu.types';

const ItemMenu = ({ label, icon, onClick, disabled }) => {
  return (
    <MenuItem onClick={onClick} disabled={disabled}>
      {icon && <ListItemIcon>{icon}</ListItemIcon>}

      <ListItemText>{label}</ListItemText>
    </MenuItem>
  );
};

ItemMenu.propTypes = ItemMenuPropTypes;
ItemMenu.defaultProps = ItemMenuDefaultProps;

export default memo(ItemMenu);
