import { Button, CircularProgress } from '@mui/material';

import Stack from '@mui/material/Stack';

import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AssessmentIcon from '@mui/icons-material/Assessment';

const DashboardHeaderActions = ({
  loading,
  onRefresh,
  onFilter,
  onExport,
  onReports,
}) => {
  console.log('onFilter :', onFilter);
  return (
    <Stack direction="row" spacing={1}>
      <Button variant="outlined" onClick={onReports}>
        <Stack direction="row" spacing={0.75}>
          <AssessmentIcon fontSize="small" />
          <span>گزارش ها</span>
        </Stack>
      </Button>

      <Button variant="outlined" onClick={onExport}>
        <Stack direction="row" spacing={0.75} alignItems="center">
          <FileDownloadIcon fontSize="small" />
          <span>خروجی</span>
        </Stack>
      </Button>

      <Button variant="outlined" onClick={onFilter}>
        <Stack direction="row" spacing={0.75} alignItems="center">
          <FilterAltIcon fontSize="small" />
          <span>جستجو</span>
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
