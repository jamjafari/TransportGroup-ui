import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';

import DashboardIcon from '@mui/icons-material/Dashboard';

import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

import PeopleIcon from '@mui/icons-material/People';

import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';

import BuildIcon from '@mui/icons-material/Build';

import AssessmentIcon from '@mui/icons-material/Assessment';

import { Link } from 'react-router-dom';

const expandedWidth = 260;

const collapsedWidth = 72;

function AppSidebar({ sidebarOpen }) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sidebarOpen ? expandedWidth : collapsedWidth,

        '& .MuiDrawer-paper': {
          width: sidebarOpen ? expandedWidth : collapsedWidth,

          overflowX: 'hidden',

          transition: 'width .3s ease',
        },
      }}
    >
      <Toolbar />

      <List>
        <ListItemButton
          sx={{
            justifyContent: sidebarOpen ? 'initial' : 'center',
          }}
          component={Link}
          to="/"
        >
          <ListItemIcon
            sx={{
              minWidth: 0,

              mr: sidebarOpen ? 3 : 'auto',

              justifyContent: 'center',
            }}
          >
            <DashboardIcon />
          </ListItemIcon>

          {sidebarOpen && <ListItemText primary="Dashboard" />}
        </ListItemButton>

        <ListItemButton
          sx={{
            justifyContent: sidebarOpen ? 'initial' : 'center',
          }}
          component={Link}
          to="/vehicles"
        >
          <ListItemIcon
            sx={{
              minWidth: 0,

              mr: sidebarOpen ? 3 : 'auto',

              justifyContent: 'center',
            }}
          >
            <DirectionsCarIcon />
          </ListItemIcon>

          {sidebarOpen && <ListItemText primary="Vehicle" />}
        </ListItemButton>

        <ListItemButton
          sx={{
            justifyContent: sidebarOpen ? 'initial' : 'center',
          }}
          component={Link}
          to="/drivers"
        >
          <ListItemIcon
            sx={{
              minWidth: 0,

              mr: sidebarOpen ? 3 : 'auto',

              justifyContent: 'center',
            }}
          >
            <PeopleIcon />
          </ListItemIcon>

          {sidebarOpen && <ListItemText primary="Driver" />}
        </ListItemButton>

        <ListItemButton
          sx={{
            justifyContent: sidebarOpen ? 'initial' : 'center',
          }}
          component={Link}
          to="/fuel-records"
        >
          <ListItemIcon
            sx={{
              minWidth: 0,

              mr: sidebarOpen ? 3 : 'auto',

              justifyContent: 'center',
            }}
          >
            <LocalGasStationIcon />
          </ListItemIcon>

          {sidebarOpen && <ListItemText primary="Fuel Records" />}
        </ListItemButton>

        <ListItemButton
          sx={{
            justifyContent: sidebarOpen ? 'initial' : 'center',
          }}
          component={Link}
          to="/services"
        >
          <ListItemIcon
            sx={{
              minWidth: 0,

              mr: sidebarOpen ? 3 : 'auto',

              justifyContent: 'center',
            }}
          >
            <BuildIcon />
          </ListItemIcon>

          {sidebarOpen && <ListItemText primary="Services" />}
        </ListItemButton>

        <ListItemButton
          sx={{
            justifyContent: sidebarOpen ? 'initial' : 'center',
          }}
          component={Link}
          to="/reports"
        >
          <ListItemIcon
            sx={{
              minWidth: 0,

              mr: sidebarOpen ? 3 : 'auto',

              justifyContent: 'center',
            }}
          >
            <AssessmentIcon />
          </ListItemIcon>

          {sidebarOpen && <ListItemText primary="Reports" />}
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default AppSidebar;
