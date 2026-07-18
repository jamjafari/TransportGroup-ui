import { Button } from '@mui/material';

import Stack from '@mui/system/Stack';

import RefreshIcon from '@mui/icons-material/Refresh';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

const DashboardHeaderActions = ({ loading, onRefresh, onFilter, onExport }) => {
  return (
    <Stack direction="row" spacing={1}>
      <Button
        variant="outlined"
        startIcon={<FileDownloadIcon />}
        onClick={onExport}
      >
        گزارش
      </Button>

      <Button
        variant="outlined"
        startIcon={<FilterAltIcon />}
        onClick={onFilter}
      >
        جستجو
      </Button>

      <Button
        variant="contained"
        startIcon={<RefreshIcon />}
        disabled={loading}
        onClick={onRefresh}
      >
        بروزرسانی
      </Button>
    </Stack>
  );
};

export default DashboardHeaderActions;
