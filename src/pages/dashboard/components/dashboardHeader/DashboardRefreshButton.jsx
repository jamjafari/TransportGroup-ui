import { Button, Stack } from '@mui/material';

import RefreshIcon from '@mui/icons-material/Refresh';
import i18n from '@/i18n';

const DashboardRefreshButton = ({ onRefresh }) => {
  return (
    <Button variant="contained" onClick={onRefresh}>
      <Stack direction="row" spacing={1} alignItems="center">
        <RefreshIcon />
        <span>{i18n.t('بروزرسانی')}</span>
      </Stack>
    </Button>
  );
};

export default DashboardRefreshButton;
