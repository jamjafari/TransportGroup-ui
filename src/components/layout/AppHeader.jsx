import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import UserMenu from './UserMenu';

import colors from '@/theme/colors';

function AppHeader({ sidebarOpen, setSidebarOpen }) {
  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: colors.paper,
        color: colors.textPrimary,
        boxShadow: 'none',
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Toolbar>
        <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          گروه حمل‌ونقل
        </Typography>

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
