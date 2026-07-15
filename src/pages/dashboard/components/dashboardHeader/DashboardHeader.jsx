import Stack from '@mui/system/Stack';

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
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{
        mb: 3,
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
  );
};

export default DashboardHeader;
