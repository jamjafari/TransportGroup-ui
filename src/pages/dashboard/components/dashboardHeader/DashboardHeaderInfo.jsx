import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";

const DashboardHeaderInfo = ({ lastUpdate }) => {
  const formattedTime = lastUpdate
    ? dayjs(lastUpdate).format("HH:mm:ss")
    : "--:--:--";
  const { t } = useTranslation();
  return (
    <Stack alignItems="center" spacing={0.5}>
      <Typography variant="statLabel" color="text.secondary">
        {t("آخرین بروزرسانی")}
      </Typography>

      <Typography variant="bodyText">
        {formattedTime}
      </Typography>
    </Stack>
  );
};

export default DashboardHeaderInfo;
