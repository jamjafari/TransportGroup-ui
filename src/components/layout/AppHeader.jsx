import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Skeleton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import UserMenu from './UserMenu';
import { useTenantContext } from '@/context/tenant';
import { AppAvatar } from '@/components';
import { getFileUrl } from '@/utils';

import colors from '@/theme/colors';

function AppHeader({ sidebarOpen, setSidebarOpen }) {
  const { tenant, loading } = useTenantContext();

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: colors.sidebar,
        color: colors.paper,
        boxShadow: 'none',
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Toolbar sx={{ gap: 1.7 }}>
        <IconButton onClick={() => setSidebarOpen(!sidebarOpen)}>
          <MenuIcon />
        </IconButton>

        {loading ? (
          <>
            <Skeleton variant="circular" width={32} height={32} />
            <Skeleton variant="text" width={160} height={32} />
          </>
        ) : (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.7,
              flexGrow: 1,
              marginLeft: 27,
            }}
          >
            <AppAvatar
              src={tenant?.logoUrl ? getFileUrl(tenant.logoUrl) : undefined}
              name={tenant?.name}
              sx={{ marginLeft: 30 }}
              size={64}
            />

            <Typography variant="h3">
              {tenant?.name || 'گروه حمل‌ونقل'}
            </Typography>
          </Box>
        )}

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
