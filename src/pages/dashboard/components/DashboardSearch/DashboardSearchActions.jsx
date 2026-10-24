import Stack from "@mui/material/Stack";

import { AppButton } from "@/components";

import useDashboardSearch from "../../hooks/useDashboardSearch";

import useDashboardRefresh from "../../hooks/useDashboardRefresh";
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
      {/* ✅ قبلاً labelKey="common.Removefilters" بود؛ چون keySeparator در i18next
          خاموش است، آن رشته یک کلید کامل در نظر گرفته می‌شد و پیدا نمی‌شد —
          در نتیجه روی دکمه عیناً متن «common.Removefilters» نمایش داده می‌شد.
          الان مثل بقیه‌ی برنامه از «کلید طبیعی» (متن فارسی) استفاده می‌کنیم. */}
      <AppButton
        labelKey="حذف فیلترها"
        variant="outlined"
        color="inherit"
        disabled={!hasActiveFilters()}
        onClick={handleClearFilters}
      />

      <Stack direction="row" spacing={1}>
        <AppButton
          variant="outlined"
          onClick={handleCancel}
          labelKey="صرف نظر"
        />

        <AppButton
          variant="contained"
          onClick={handleApplyFilters}
          labelKey="اعمال فیلترها"
        />
      </Stack>
    </Stack>
  );
};

export default DashboardSearchActions;
