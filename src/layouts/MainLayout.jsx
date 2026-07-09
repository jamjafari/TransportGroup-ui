import { useState } from 'react';
import { Box, Toolbar } from '@mui/material';

import { Outlet } from 'react-router-dom';

import AppSidebar from '../components/layout/AppSidebar';

import AppHeader from '../components/layout/AppHeader';

function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <AppHeader sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <AppSidebar sidebarOpen={sidebarOpen} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
        }}
      >
        <Toolbar />

        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
