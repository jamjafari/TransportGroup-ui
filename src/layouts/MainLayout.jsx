import { useState } from 'react';

import { Box, Drawer, Toolbar } from '@mui/material';

import { Outlet } from 'react-router-dom';

import AppSidebar from '@/components/common/navigation/AppSidebar/AppSidebar';
import AppHeader from '../components/layout/AppHeader';

import { menuItems } from '@/config/menuItems';
import colors from '@/theme/colors';

const expandedWidth = 260;
const collapsedWidth = 72;

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const drawerWidth = sidebarOpen ? expandedWidth : collapsedWidth;

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
            bgcolor: colors.sidebar,
            borderLeft: `1px solid ${colors.border}`,
            borderRight: 'none',
          },
        }}
      >
        <Toolbar />
        <AppSidebar items={menuItems} collapsed={!sidebarOpen} />
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          bgcolor: colors.background,
          minHeight: '100vh',
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
