import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Skeleton,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { useTranslation } from 'react-i18next';

import UserMenu from './UserMenu';
import ThemeModeToggle from './ThemeModeToggle';
import LanguageToggle from './LanguageToggle';
import { useTenantContext } from '@/context/tenant';
import { AppAvatar } from '@/components';
import { getFileUrl } from '@/utils';

function AppHeader({ sidebarOpen, setSidebarOpen }) {
  const { tenant, loading } = useTenantContext();
  const { t } = useTranslation();

  return (
    <AppBar
      position="fixed"
      sx={{
        bgcolor: 'surface.header',
        color: 'surface.headerText',
        boxShadow: 'none',
        borderBottom: '1px solid',
        borderBottomColor: 'divider',
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

            <Typography variant="h2">
              {tenant?.name || t('گروه حمل‌ونقل')}
            </Typography>
          </Box>
        )}

        <LanguageToggle />

        <ThemeModeToggle />

        <UserMenu />
      </Toolbar>
    </AppBar>
  );
}

export default AppHeader;
