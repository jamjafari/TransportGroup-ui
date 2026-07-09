import { Box, Paper, Typography } from '@mui/material';

import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <Box
      sx={{
        minHeight: '100vh',

        display: 'flex',

        justifyContent: 'center',

        alignItems: 'center',

        backgroundColor: '#f4f6f8',
      }}
    >
      <Paper
        elevation={8}

        sx={{
          width: 420,

          p: 5,

          borderRadius: 3,
        }}
      >
        <Typography
          variant="h4"

          align="center"

          gutterBottom
        >
          TransportGroup
        </Typography>

        <Typography
          align="center"

          color="text.secondary"

          sx={{ mb: 4 }}
        >
          Fleet Management System
        </Typography>

        <Outlet />
      </Paper>
    </Box>
  );
}

export default AuthLayout;
