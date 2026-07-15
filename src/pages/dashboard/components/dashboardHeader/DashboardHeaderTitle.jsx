import { Typography } from '@mui/material';

import Stack from '@mui/system/Stack';

const DashboardHeaderTitle = () => {
  return (
    <Stack spacing={0.5}>
      <Typography variant="h4" fontWeight={700}>
        Dashboard
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Fleet Management System
      </Typography>
    </Stack>
  );
};

export default DashboardHeaderTitle;
