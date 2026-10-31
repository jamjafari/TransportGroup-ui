import { Paper, Typography, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

const DashboardSection = ({ title, children }) => {
  const { t } = useTranslation();
  return (
    <Paper
      elevation={1}
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 3,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      {title && (
        <Typography variant="sectionTitle" sx={{ mb: 2 }}>
          {t(title)}
        </Typography>
      )}

      <Stack spacing={2}>{children}</Stack>
    </Paper>
  );
};

export default DashboardSection;
