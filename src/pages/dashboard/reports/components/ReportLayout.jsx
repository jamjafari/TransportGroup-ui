import React from "react";
import { Paper, Stack, Typography, Divider } from "@mui/material";
import { useTranslation } from "react-i18next";

const ReportLayout = ({ title, subtitle, children }) => {
  const { t } = useTranslation();
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        borderRadius: 2,
        border: "1px solid",
        borderColor: "divider",
      }}
    >
      <Stack spacing={2}>
        <Stack spacing={0.5}>
          <Typography variant="pageTitle">
            {t(title)}
          </Typography>

          <Typography variant="pageSubtitle" color="text.secondary">
            {t(subtitle)}
          </Typography>
        </Stack>

        <Divider />

        {children}
      </Stack>
    </Paper>
  );
};

export default ReportLayout;
