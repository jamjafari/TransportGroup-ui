import { Paper, Typography, Stack } from '@mui/material';

const DashboardSection = ({ title, children }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 3,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      {title && (
        <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>
          {title}
        </Typography>
      )}

      <Stack spacing={2}>{children}</Stack>
    </Paper>
  );
};

export default DashboardSection;
