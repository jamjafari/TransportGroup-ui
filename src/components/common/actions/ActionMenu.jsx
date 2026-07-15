import React, { memo } from 'react';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import { AppMenu } from '@/components/common/navigation/AppMenu';

import {
  ActionMenuPropTypes,
  ActionMenuDefaultProps,
} from './ActionMenu.types';

const ActionMenu = ({
  actions,

  iconButtonProps,
}) => {
  const items = actions.map((action) => ({
    id: action.id,

    label: action.label,

    icon: action.icon,

    disabled: action.disabled,

    onClick: action.onClick,
  }));

  return (
    <AppMenu
      icon={<MoreVertIcon />}

      items={items}

      iconButtonProps={iconButtonProps}
    />
  );
};

ActionMenu.propTypes = ActionMenuPropTypes;

ActionMenu.defaultProps = ActionMenuDefaultProps;

export default memo(ActionMenu);
