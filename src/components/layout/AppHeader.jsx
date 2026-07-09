import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import IconButton from '@mui/material/IconButton';
import UserMenu from './UserMenu';

function AppHeader({ sidebarOpen }) {
  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton
          color="inherit"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <MenuIcon />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
          }}
        >
          Transport Group
        </Typography>

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
