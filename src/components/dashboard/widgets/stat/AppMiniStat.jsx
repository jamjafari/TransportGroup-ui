import React from "react";

import { Paper, Box, Typography, Skeleton } from "@mui/material";

import useLocale from "@/context/locale/useLocale";
import { useTranslation } from "react-i18next";

import { AppStatCardPropTypes, AppStatCardDefaultProps } from "./AppStat.types";

const AppMiniStat = ({ title, value, icon, loading }) => {
  // flex-direction توسط cssjanus برنمی‌گردد، پس باید خودمان به جهت زبان گره بزنیم.
  // در فارسی همان چیدمان قبلی حفظ می‌شود.
  const { isRtl } = useLocale();
  const { t } = useTranslation();
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        borderRadius: 2,

        width: "100%",
      }}
    >
      <Box
        display="flex"
        flexDirection={isRtl ? "row-reverse" : "row"}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography fontWeight={800} variant="h4" color="text.secondary">
            {t(title)}
          </Typography>

          {loading ? (
            <Skeleton width={45} />
          ) : (
            <Typography variant="h4" fontWeight={700}>
              {t(value)}
            </Typography>
          )}
        </Box>

        {icon && <Box>{icon}</Box>}
      </Box>
    </Paper>
  );
};

AppMiniStat.propTypes = AppStatCardPropTypes;

AppMiniStat.defaultProps = AppStatCardDefaultProps;

export default React.memo(AppMiniStat);
