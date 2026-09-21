import { Button, CircularProgress } from '@mui/material';
import Stack from '@mui/material/Stack';

import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MapIcon from '@mui/icons-material/Map'; // ✅ اضافه شد

const DashboardHeaderActions = ({
  loading,
  onRefresh,
  onFilter,
  onExport,
  onReports,
  onShowMap, // ✅ اضافه شد
}) => {
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" onClick={onFilter}>
        <Stack direction="row" spacing={0.75} alignItems="center">
          <FilterAltIcon fontSize="small" />
          <span>جستجو</span>
        </Stack>
      </Button>

      <Button variant="outlined" onClick={onShowMap}>
        <Stack direction="row" spacing={0.75} alignItems="center">
          <MapIcon fontSize="small" />
          <span>نقشه خودروها</span>
        </Stack>
      </Button>

      <Button variant="contained" disabled={loading} onClick={onRefresh}>
        <Stack direction="row" spacing={0.75} alignItems="center">
          {loading ? (
            <CircularProgress size={18} color="inherit" />
          ) : (
            <RefreshIcon fontSize="small" />
          )}
          <span>{loading ? 'در حال بروزرسانی' : 'بروزرسانی'}</span>
        </Stack>
      </Button>
    </Stack>
  );
};

export default DashboardHeaderActions;
