import { Box, Stack } from '@mui/material';

import DashboardHeaderTitle from './DashboardHeaderTitle';
import DashboardHeaderInfo from './DashboardHeaderInfo';
import DashboardHeaderActions from './DashboardHeaderActions';
import DashboardSearchSummary from '../DashboardSearchSummary';
import { useReportDialog } from '@/pages/dashboard/reports/hooks';
import { ReportDialog } from '@/pages/dashboard/reports/dialogs';

const DashboardHeader = ({
  loading = false,
  lastUpdate = null,
  onRefresh,
  onFilter,
  onExport,
  onReports,
}) => {
  const { open, openDialog, closeDialog } = useReportDialog();
  return (
    <>
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
            onReports={openDialog}
          />
          <DashboardSearchSummary />
        </Stack>
      </Box>
      <ReportDialog open={open} onClose={closeDialog} />
    </>
  );
};

export default DashboardHeader;
