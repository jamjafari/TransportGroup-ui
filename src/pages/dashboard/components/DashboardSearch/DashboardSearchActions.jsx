import Stack from '@mui/material/Stack';

import { AppButton } from '@/components';

import useDashboardSearch from '../../hooks/useDashboardSearch';

import useDashboardRefresh from '../../hooks/useDashboardRefresh';
const DashboardSearchActions = ({ onClose }) => {
  const { applyFilters, clearFilters, hasActiveFilters } = useDashboardSearch();
  const { refreshDashboard } = useDashboardRefresh();
  const handleApplyFilters = () => {
    applyFilters();

    refreshDashboard();

    onClose();
  };

  const handleClearFilters = () => {
    clearFilters();

    refreshDashboard();
  };
  const handleCancel = () => {
    onClose?.();
  };
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        mt: 3,
      }}
    >
      <AppButton
        variant="outlined"
        color="inherit"
        disabled={!hasActiveFilters()}
        onClick={handleClearFilters}
      >
        حذف فیلترها
      </AppButton>

      <Stack direction="row" spacing={1}>
        <AppButton variant="outlined" onClick={handleCancel}>
          انصراف
        </AppButton>

        <AppButton variant="contained" onClick={handleApplyFilters}>
          اعمال فیلترها
        </AppButton>
      </Stack>
    </Stack>
  );
};

export default DashboardSearchActions;
