import { Typography } from '@mui/material';

import Stack from '@mui/system/Stack';

const DashboardHeaderTitle = () => {
  return (
    <Stack spacing={0.5}>
      <Typography variant="h4" fontWeight={700}>
        داشبورد
      </Typography>

      <Typography variant="body2" color="text.secondary">
        سامانه مدیریت نقلیه
      </Typography>
    </Stack>
  );
};

export default DashboardHeaderTitle;
