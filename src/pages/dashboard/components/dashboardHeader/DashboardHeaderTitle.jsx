import { Typography } from '@mui/material';

import Stack from '@mui/material/Stack'; // به‌جای '@mui/system/Stack'
const DashboardHeaderTitle = () => {
  return (
    <Stack spacing={0.5}>
      <Typography variant="h3" fontWeight={700}>
        داشبورد
      </Typography>

      <Typography variant="h5" color="text.secondary">
        سامانه ناوبری هوشمند
      </Typography>
    </Stack>
  );
};

export default DashboardHeaderTitle;
