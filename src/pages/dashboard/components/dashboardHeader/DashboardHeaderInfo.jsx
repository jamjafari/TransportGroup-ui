import { Typography } from '@mui/material';

import Stack from '@mui/system/Stack';

const DashboardHeaderInfo = ({ lastUpdate }) => {
  return (
    <Stack alignItems="center" spacing={0.5}>
      <Typography variant="caption" color="text.secondary">
        آخرین بروزرسانی
      </Typography>

      <Typography variant="body2" fontWeight={600}>
        {lastUpdate}
      </Typography>
    </Stack>
  );
};

export default DashboardHeaderInfo;
