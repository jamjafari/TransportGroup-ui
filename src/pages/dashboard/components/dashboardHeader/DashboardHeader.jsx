import { Stack, Box } from '@mui/material';

import DashboardHeaderTitle from './DashboardHeaderTitle';
import DashboardHeaderInfo from './DashboardHeaderInfo';
import DashboardHeaderActions from './DashboardHeaderActions';

const DashboardHeader = ({
  lastUpdate,
  loading,
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
          bgcolor: 'grey.50',
          border: '1px solid',
          borderColor: 'divider',
        }}
      >
        <DashboardHeaderTitle />

        <DashboardHeaderInfo lastUpdate={lastUpdate} />

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
