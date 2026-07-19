import { Button, Stack } from '@mui/material';

import RefreshIcon from '@mui/icons-material/Refresh';

const DashboardRefreshButton = ({ onRefresh }) => {
  return (
    <Button variant="contained" onClick={onRefresh}>
      <Stack direction="row" spacing={1} alignItems="center">
        <RefreshIcon />
        <span>بروزرسانی</span>
      </Stack>
    </Button>
  );
};

export default DashboardRefreshButton;
