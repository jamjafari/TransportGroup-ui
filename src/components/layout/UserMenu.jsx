import React, { useState } from 'react';

import {
  Avatar,
  Menu,
  MenuItem,
  IconButton,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import LockResetIcon from '@mui/icons-material/LockReset';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks';

function UserMenu() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const displayName = user?.unique_name || user?.UniqueName || 'کاربر';

  const handleLogout = () => {
    setAnchorEl(null);
    logout();
    navigate('/login', { replace: true });
  };

  const handleChangePassword = () => {
    setAnchorEl(null);
    navigate('/change-password');
  };

  return (
    <>
      <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
        <Avatar>{displayName?.[0]}</Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem disabled>{displayName}</MenuItem>

        <Divider />

        <MenuItem onClick={handleChangePassword}>
          <ListItemIcon>
            <LockResetIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>تغییر رمز عبور</ListItemText>
        </MenuItem>

        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText>خروج</ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
}

export default UserMenu;
