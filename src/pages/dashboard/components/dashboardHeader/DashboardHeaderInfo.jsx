import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';

import dayjs from 'dayjs';

const DashboardHeaderInfo = ({ lastUpdate }) => {
  const formattedTime = lastUpdate
    ? dayjs(lastUpdate).format('HH:mm:ss')
    : '--:--:--';

  return (
    <Stack fontWeight={700} alignItems="center" spacing={0.5}>
      <Typography variant="h4" fontWeight={700} color="text.secondary">
        آخرین بروزرسانی
      </Typography>

      <Typography variant="body2" fontWeight={600}>
        {formattedTime}
      </Typography>
    </Stack>
  );
};

export default DashboardHeaderInfo;
