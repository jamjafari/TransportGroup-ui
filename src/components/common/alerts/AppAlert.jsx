import React, { memo } from "react";
import { Alert, AlertTitle, Collapse } from "@mui/material";
import { useTranslation } from "react-i18next";

import { AppAlertPropTypes, AppAlertDefaultProps } from "./AppAlert.types";

const AppAlert = ({
  open,
  severity,
  title,
  children,
  action,
  variant,
  onClose,
}) => {
  const { t } = useTranslation();
  return (
    <Collapse in={open}>
      <Alert
        severity={severity}
        variant={variant}
        action={action}
        onClose={onClose}
        sx={{ fontSize: 18 }}
      >
        {title && <AlertTitle>{t(title)}</AlertTitle>}

        {children}
      </Alert>
    </Collapse>
  );
};

AppAlert.propTypes = AppAlertPropTypes;

AppAlert.defaultProps = AppAlertDefaultProps;

export default memo(AppAlert);
