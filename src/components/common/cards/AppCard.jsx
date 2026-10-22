import React, { memo } from "react";

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Skeleton,
  Typography,
  Box,
} from "@mui/material";

import { AppCardPropTypes } from "./AppCard.types";
import { useTranslation } from "react-i18next";

const AppCard = ({
  title,

  subtitle,

  icon,

  actions,

  footer,

  loading = false,

  elevation = 0,

  sx,

  children,
}) => {
  const { t } = useTranslation;
  return (
    <Card
      elevation={elevation}
      sx={{
        height: "100%",

        display: "flex",

        flexDirection: "column",

        ...sx,
      }}
    >
      {(title || subtitle || icon || actions) && (
        <>
          <CardHeader
            avatar={icon}
            title={
              <Typography variant="h4" fontWeight={600}>
                {t(title)}
              </Typography>
            }
            subheader={t(subtitle)}
            action={actions}
          />

          <Divider />
        </>
      )}

      {/* ✅ alignItems:'right' و direction:'row-rewers' حذف شدند —
          هر دو CSS نامعتبر بودند (align-items مقدار right ندارد و
          'row-rewers' غلط املایی row-reverse است که اصلاً مقدار direction نیست)،
          پس مرورگر آن‌ها را کنار می‌گذاشت و هیچ اثری نداشتند. */}
      <CardContent
        sx={{
          flexGrow: 1,
        }}
      >
        {loading ? (
          <Box>
            <Skeleton variant="text" height={40} />

            <Skeleton variant="rounded" height={120} />
          </Box>
        ) : (
          children
        )}
      </CardContent>

      {footer && (
        <>
          <Divider />

          <CardActions>{t(footer)}</CardActions>
        </>
      )}
    </Card>
  );
};

AppCard.propTypes = AppCardPropTypes;

export default memo(AppCard);
