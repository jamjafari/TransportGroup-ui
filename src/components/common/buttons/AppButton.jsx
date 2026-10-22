import React, { forwardRef, memo } from "react";
import { Button, CircularProgress } from "@mui/material";

import { useTranslate } from "@/hooks";
import { AppButtonPropTypes } from "./AppButton.types";

const AppButton = forwardRef(
  (
    {
      children,
      labelKey,
      loading = false,
      variant = "contained",
      color = "primary",
      size = "medium",
      disabled = false,
      fullWidth = false,
      startIcon,
      endIcon,
      type = "button",
      translationOptions,
      ...props
    },
    ref,
  ) => {
    const { t } = useTranslate();

    const content =
      labelKey != null ? t(labelKey, translationOptions) : children;

    return (
      <Button
        ref={ref}
        variant={variant}
        color={color}
        size={size}
        disabled={disabled || loading}
        fullWidth={fullWidth}
        startIcon={!loading ? startIcon : null}
        endIcon={!loading ? endIcon : null}
        type={type}
        sx={{
          fontSize: "18px",
          fontWeight: 900,
          ...props.sx,
        }}
        {...props}
      >
        {loading ? <CircularProgress size={22} color="inherit" /> : content}
      </Button>
    );
  },
);

AppButton.displayName = "AppButton";
AppButton.propTypes = AppButtonPropTypes;

export default memo(AppButton);
