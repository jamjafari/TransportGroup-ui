import React, { memo, useState } from 'react';

import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { NavLink } from 'react-router-dom';

import colors from '@/theme/colors';

const itemSx = (collapsed, level) => ({
  pl: 2 + level * 2,
  justifyContent: collapsed ? 'center' : 'initial',
  color: '#dbd7d4',
  '&:hover': {
    bgcolor: colors.sidebarHover,
  },
  '&.active': {
    bgcolor: colors.sidebarActive,
    color: '#d9a376',
  },
});

const ItemMenu = ({ item, collapsed, level = 0 }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  if (hasChildren) {
    return (
      <>
        <ListItemButton
          onClick={() => setOpen((prev) => !prev)}
          disabled={item.disabled}
          sx={{
            ...itemSx(collapsed, level),
            '&:hover': { bgcolor: colors.sidebarHover },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: collapsed ? 0 : 2,
              justifyContent: 'center',
              color: '#d9a376',
            }}
          >
            {item.icon}
          </ListItemIcon>

          {!collapsed && <ListItemText primary={item.label} />}
          {!collapsed && (open ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
        </ListItemButton>

        {!collapsed && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List disablePadding>
              {item.children.map((child) => (
                <ItemMenu
                  key={child.id}
                  item={child}
                  collapsed={collapsed}
                  level={level + 1}
                />
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  }

  return (
    <ListItemButton
      component={NavLink}
      to={item.path}
      disabled={item.disabled}
      sx={itemSx(collapsed, level)}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: collapsed ? 0 : 2,
          justifyContent: 'center',
          color: '#d9a376',
        }}
      >
        {item.icon}
      </ListItemIcon>

      {!collapsed && <ListItemText primary={item.label} />}
    </ListItemButton>
  );
};

export default memo(ItemMenu);
