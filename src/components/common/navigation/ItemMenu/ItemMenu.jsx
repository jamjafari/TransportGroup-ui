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

import { NavLink, useLocation } from 'react-router-dom';

import colors from '@/theme/colors';

const itemSx = (collapsed, level) => ({
  pl: 2 + level * 2,
  justifyContent: collapsed ? 'center' : 'initial',
  color: 'colors.paper',
  '&:hover': {
    bgcolor: colors.sidebarHover,
  },
  '& .MuiListItemText-primary': {
    fontSize: 18,
    fontWeight: 1000,
    transition: 'font-size 0.2s ease, color 0.2s ease', // ✅ برای تغییر نرم سایز/رنگ
  },
  '&.active': {
    bgcolor: colors.sidebarActive,
    '& .MuiListItemText-primary': {
      fontSize: 20, // ✅ فونت بزرگ‌تر برای آیتم فعال
      fontWeight: 1000,
      color: colors.warning, // ✅ رنگ متفاوت برای آیتم فعال
    },
  },
});

// ✅ استایل جداگانه برای آیتم‌های والد وقتی یکی از زیرمنوهاشون فعال است (چون NavLink نیستند)
const parentActiveSx = (isChildActive) =>
  isChildActive
    ? {
        bgcolor: colors.sidebarActive,
        '& .MuiListItemText-primary': {
          fontSize: 20,
          fontWeight: 900,
          color: colors.warning,
        },
      }
    : {};

const pressSx = (pressed) => ({
  transition: 'transform 0.2s ease',
  transform: pressed ? 'scale(1.07)' : 'scale(1)',
});

// ✅ بررسی بازگشتی اینکه آیا مسیر فعلی داخل یکی از زیرمنوهای این آیتم است
const isDescendantActive = (item, pathname) => {
  if (!item.children) return false;
  return item.children.some(
    (child) => child.path === pathname || isDescendantActive(child, pathname),
  );
};

const ItemMenu = ({ item, collapsed, level = 0 }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [pressed, setPressed] = useState(false);

  const triggerPressEffect = () => {
    setPressed(true);
    setTimeout(() => setPressed(false), 200);
  };

  const hasChildren = item.children && item.children.length > 0;
  const childActive =
    hasChildren && isDescendantActive(item, location.pathname);

  if (hasChildren) {
    return (
      <>
        <ListItemButton
          onClick={() => {
            triggerPressEffect();
            setOpen((prev) => !prev);
          }}
          disabled={item.disabled}
          sx={{
            ...itemSx(collapsed, level),
            ...parentActiveSx(childActive), // ✅ اضافه شد
            ...pressSx(pressed),
            '&:hover': { bgcolor: colors.sidebarHover },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: collapsed ? 0 : 2,
              justifyContent: 'center',
              color: '#fbd6b7',
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
      onClick={triggerPressEffect}
      sx={{
        ...itemSx(collapsed, level),
        ...pressSx(pressed),
      }}
    >
      <ListItemIcon
        sx={{
          minWidth: 0,
          mr: collapsed ? 0 : 2,
          justifyContent: 'center',
          color: '#fbd6b7',
        }}
      >
        {item.icon}
      </ListItemIcon>

      {!collapsed && <ListItemText primary={item.label} />}
    </ListItemButton>
  );
};

export default memo(ItemMenu);
