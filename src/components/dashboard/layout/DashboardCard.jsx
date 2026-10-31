// src/components/common/cards/DashboardCard.jsx

import React, { memo } from "react";
import { useTranslation } from "react-i18next";

import { Card, CardContent, Divider, Stack, Typography } from "@mui/material";

const DashboardCard = ({ title, subtitle, children, height = "100%" }) => {
  const { t } = useTranslation();
  return (
    <Card
      elevation={1}
      sx={{
        borderRadius: 3,
        height,
      }}
    >
      {(title || subtitle) && (
        <>
          <CardContent sx={{ pb: 1 }}>
            <Stack spacing={0.5}>
              {title && (
                <Typography variant="cardTitle">
                  {t(title)}
                </Typography>
              )}

              {subtitle && (
                <Typography variant="cardSubtitle" color="text.secondary">
                  {t(subtitle)}
                </Typography>
              )}
            </Stack>
          </CardContent>

          <Divider />
        </>
      )}

      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default memo(DashboardCard);
