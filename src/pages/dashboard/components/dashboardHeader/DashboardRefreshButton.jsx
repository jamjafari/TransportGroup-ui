import { Button } from '@mui/material';

import RefreshIcon from '@mui/icons-material/Refresh';

const DashboardRefreshButton = ({ onRefresh }) => {
  return (
    <Button variant="contained" startIcon={<RefreshIcon />} onClick={onRefresh}>
      بروزرسانی
    </Button>
  );
};

export default DashboardRefreshButton;
