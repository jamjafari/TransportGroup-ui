import { Box, Stack } from '@mui/material';

import DashboardHeaderTitle from './DashboardHeaderTitle';
import DashboardHeaderInfo from './DashboardHeaderInfo';
import DashboardHeaderActions from './DashboardHeaderActions';

const DashboardHeader = ({
  loading = false,
  lastUpdate = null,
  onRefresh,
  onFilter,
  onExport,
}) => {
  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          direction: 'rtl',

          mb: 4,

          px: 4,
          py: 3,

          borderRadius: 3,

          bgcolor: 'grey.100',

          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        {/* عنوان داشبورد */}
        <DashboardHeaderTitle />

        {/* زمان آخرین بروزرسانی */}
        <DashboardHeaderInfo lastUpdate={lastUpdate} />

        {/* عملیات داشبورد */}
        <DashboardHeaderActions
          loading={loading}
          onRefresh={onRefresh}
          onFilter={onFilter}
          onExport={onExport}
        />
      </Stack>
    </Box>
  );
};

export default DashboardHeader;
