import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import Stack from "@mui/material/Stack"; // به‌جای '@mui/system/Stack'
const DashboardHeaderTitle = () => {
  const { t } = useTranslation();
  return (
    <Stack spacing={0.5}>
      <Typography variant="h3" fontWeight={700}>
        {t("داشبورد")}
      </Typography>

      <Typography variant="h5" color="text.secondary">
        {t("سامانه ناوبری هوشمند")}
      </Typography>
    </Stack>
  );
};

export default DashboardHeaderTitle;
