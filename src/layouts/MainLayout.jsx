import { useMemo, useState } from 'react';

import { Box, Drawer, Stack, Toolbar } from '@mui/material';

import { Outlet } from 'react-router-dom';

import AppSidebar from '@/components/common/navigation/AppSidebar/AppSidebar';
import AppHeader from '../components/layout/AppHeader';

import { menuItems } from '@/config/menuItems';
import { filterMenuByPermission } from '@/utils/filterMenuByPermission';

import { useAuth } from '@/hooks';
import VehicleRequestFab from '@/modules/vehicleRequests/components/VehicleRequestFab';
import DocumentAssistantFab from '@/modules/documentAssistant/components/DocumentAssistantFab';
import useTenantContext from '@/context/tenant/useTenantContext';
import BatoroLogo from '@/components/layout/BatoroLogo';
import SidebarRoad from '@/components/layout/SidebarRoad';

const expandedWidth = 260;
const collapsedWidth = 72;

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { can } = useAuth();
  const { tenant } = useTenantContext();

  const drawerWidth = sidebarOpen ? expandedWidth : collapsedWidth;

  // قابلیت‌هایی که سوپرادمین برای هر سازمان جدا روشن/خاموش می‌کند (آیتم‌های منو با `feature`)
  const vehicleRequestsEnabled = !!tenant?.vehicleRequestsEnabled;

  const visibleMenuItems = useMemo(
    () =>
      filterMenuByPermission(menuItems, can, (feature) =>
        feature === 'vehicleRequests' ? vehicleRequestsEnabled : true,
      ),
    [can, vehicleRequestsEnabled],
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          '& .MuiDrawer-paper': {
            width: drawerWidth,
            overflowX: 'hidden',
            transition: 'width .3s ease',
            boxSizing: 'border-box',
            bgcolor: 'sidebar.main',
            borderLeft: '1px solid',
            borderLeftColor: 'divider',
            borderRight: 'none',
          },
        }}
      >
        <SidebarRoad />

        {/* ✅ لوگوی باتورو در جایگاه بالای سایدبار (قبلاً یک Toolbar خالی هم‌ارتفاع نوار بالا) */}
        <BatoroLogo collapsed={!sidebarOpen} />

        <AppSidebar items={visibleMenuItems} collapsed={!sidebarOpen} />
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: 'background.default',
          minHeight: '100vh',
          position: 'relative', // ✅ اضافه شد — تا Overlay نقشه فقط همینجا محدود بمونه
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>

      {/* ✅ دکمه‌های شناور در گوشه‌ی پایین، سمت مخالف سایدبار، کنار هم.
          «right» در حالت فارسی با افزونه‌ی RTL (cssjanus) به left تبدیل می‌شود. */}
      <Stack
        direction="row"
        spacing={1.5}
        alignItems="center"
        sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: (theme) => theme.zIndex.speedDial }}
      >
        <DocumentAssistantFab />
        <VehicleRequestFab />
      </Stack>
    </Box>
  );
}

export default MainLayout;
