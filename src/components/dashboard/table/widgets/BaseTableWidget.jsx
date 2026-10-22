import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Typography,
  IconButton,
  Box,
  Alert,
  CircularProgress,
} from "@mui/material";

import Stack from "@mui/material/Stack";

import RefreshIcon from "@mui/icons-material/Refresh";

import {
  BaseTableWidgetPropTypes,
  BaseTableWidgetDefaultProps,
} from "./BaseTableWidget.types";

const BaseTableWidget = ({
  title,

  subtitle,

  loading,

  error,

  refresh,

  actions,

  toolbar,

  footer,

  children,

  height,
}) => {
  const { t } = useTranslation();
  return (
    <Card
      sx={{
        height,
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={600}>
            {t(title)}
          </Typography>
        }
        subheader={t(subtitle)}
        action={
          <Stack direction="row" spacing={1} alignItems="center">
            {t(actions)}

            {refresh && (
              <IconButton size="small" onClick={refresh}>
                <RefreshIcon fontSize="small" />
              </IconButton>
            )}
          </Stack>
        }
      />

      {toolbar && (
        <>
          <Divider />

          <Box p={2}>{toolbar}</Box>
        </>
      )}

      <Divider />

      <CardContent
        sx={{
          flex: 1,
          p: 0,
          overflow: "hidden",
        }}
      >
        {loading ? (
          <Stack justifyContent="center" alignItems="center" height="100%">
            <CircularProgress />
          </Stack>
        ) : error ? (
          <Box p={2}>
            <Alert severity="error">
              {typeof error === "string" ? error : "خطا در دریافت اطلاعات"}
            </Alert>
          </Box>
        ) : (
          children
        )}
      </CardContent>

      {footer && (
        <>
          <Divider />

          <CardActions>{footer}</CardActions>
        </>
      )}
    </Card>
  );
};

BaseTableWidget.propTypes = BaseTableWidgetPropTypes;

BaseTableWidget.defaultProps = BaseTableWidgetDefaultProps;

export default memo(BaseTableWidget);
