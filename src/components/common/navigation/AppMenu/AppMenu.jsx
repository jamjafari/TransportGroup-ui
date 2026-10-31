import React, { memo, useCallback, useState } from 'react';

import { List } from '@mui/material';

import ItemMenu from '../ItemMenu/ItemMenu';

import { AppMenuPropTypes, AppMenuDefaultProps } from './AppMenu.types';

const AppMenu = ({ items, collapsed }) => {
  // ✅ رفتار آکاردئونی: در هر سطح فقط یک منوی بازشونده باز است؛
  // باز کردن یکی بقیه را می‌بندد تا سایدبار بی‌جهت طولانی و اسکرول‌دار نشود.
  const [openId, setOpenId] = useState(null);

  const handleToggle = useCallback(
    (id) => setOpenId((prev) => (prev === id ? null : id)),
    [],
  );

  return (
    <List disablePadding>
      {items.map((item) => (
        <ItemMenu
          key={item.id}
          item={item}
          collapsed={collapsed}
          open={openId === item.id}
          onToggle={handleToggle}
        />
      ))}
    </List>
  );
};

AppMenu.propTypes = AppMenuPropTypes;
AppMenu.defaultProps = AppMenuDefaultProps;

export default memo(AppMenu);
