import React, { memo, useCallback, useState } from 'react';

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
import { useTranslation } from 'react-i18next';

const itemSx = (collapsed, level) => ({
  pl: 2 + level * 2,
  justifyContent: collapsed ? 'center' : 'initial',
  color: 'sidebar.text',
  '&:hover': {
    bgcolor: 'sidebar.hover',
  },
  '& .MuiListItemText-primary': {
    fontSize: 18,
    fontWeight: 1000,
    transition: 'font-size 0.2s ease, color 0.2s ease', // ✅ برای تغییر نرم سایز/رنگ
  },
  '&.active': {
    bgcolor: 'sidebar.active',
    '& .MuiListItemText-primary': {
      fontSize: 20, // ✅ فونت بزرگ‌تر برای آیتم فعال
      fontWeight: 1000,
      color: 'sidebar.activeText', // ✅ رنگ متفاوت برای آیتم فعال
    },
  },
});

// ✅ استایل جداگانه برای آیتم‌های والد وقتی یکی از زیرمنوهاشون فعال است (چون NavLink نیستند)
const parentActiveSx = (isChildActive) =>
  isChildActive
    ? {
        bgcolor: 'sidebar.active',
        '& .MuiListItemText-primary': {
          fontSize: 20,
          fontWeight: 900,
          color: 'sidebar.activeText',
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

const ItemMenu = ({ item, collapsed, level = 0, open: openProp, onToggle }) => {
  // ✅ یک نقطه‌ی ترجمه برای کل منو: برچسب‌های menuItems فارسی‌اند و خودشان
  // کلید ترجمه هستند، پس همین t() هر ۳۰ آیتم منو را پوشش می‌دهد.
  const { t } = useTranslation();

  const location = useLocation();
  const [pressed, setPressed] = useState(false);

  // ✅ باز/بسته بودن را والد کنترل می‌کند (AppMenu برای سطح اول، همین کامپوننت برای زیرمنوها)
  // تا در هر سطح فقط یک منو باز باشد. اگر والد کنترل نکند، مثل قبل حالت محلی دارد.
  const [localOpen, setLocalOpen] = useState(false);
  const isControlled = typeof onToggle === 'function';
  const open = isControlled ? Boolean(openProp) : localOpen;

  const toggle = () => {
    if (isControlled) onToggle(item.id);
    else setLocalOpen((prev) => !prev);
  };

  // زیرمنوهای همین آیتم: باز شدن یکی، خواهرهایش را می‌بندد
  const [openChildId, setOpenChildId] = useState(null);
  const handleChildToggle = useCallback(
    (id) => setOpenChildId((prev) => (prev === id ? null : id)),
    [],
  );

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
            toggle();
          }}
          disabled={item.disabled}
          sx={{
            ...itemSx(collapsed, level),
            ...parentActiveSx(childActive), // ✅ اضافه شد
            ...pressSx(pressed),
            '&:hover': { bgcolor: 'sidebar.hover' },
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: collapsed ? 0 : 2,
              justifyContent: 'center',
              color: 'sidebar.icon',
            }}
          >
            {item.icon}
          </ListItemIcon>

          {!collapsed && <ListItemText primary={t(item.label)} />}
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
                  open={openChildId === child.id}
                  onToggle={handleChildToggle}
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
          color: 'sidebar.icon',
        }}
      >
        {item.icon}
      </ListItemIcon>

      {!collapsed && <ListItemText primary={t(item.label)} />}
    </ListItemButton>
  );
};

export default memo(ItemMenu);
