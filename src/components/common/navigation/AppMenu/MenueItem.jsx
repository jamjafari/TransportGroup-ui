import React, { memo, useState } from 'react';

import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { NavLink } from 'react-router-dom';

const MenuItem = ({ item, collapsed = false }) => {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children?.length > 0;

  const handleClick = () => {
    if (hasChildren) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <>
      <ListItemButton
        component={hasChildren ? 'div' : NavLink}
        to={hasChildren ? undefined : item.path}
        onClick={handleClick}
      >
        {item.icon && <ListItemIcon>{item.icon}</ListItemIcon>}

        {!collapsed && <ListItemText primary={item.label} />}

        {!collapsed && hasChildren && (open ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>

      {hasChildren && (
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {item.children.map((child) => (
              <MenuItem key={child.id} item={child} collapsed={collapsed} />
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};

export default memo(MenuItem);
