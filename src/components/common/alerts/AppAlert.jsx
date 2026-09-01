import React, { memo } from 'react';
import { Alert, AlertTitle, Collapse } from '@mui/material';

import { AppAlertPropTypes, AppAlertDefaultProps } from './AppAlert.types';

const AppAlert = ({
  open,
  severity,
  title,
  children,
  action,
  variant,
  onClose,
}) => {
  return (
    <Collapse in={open}>
      <Alert
        dir="rtl"
        severity={severity}
        variant={variant}
        action={action}
        onClose={onClose}
      >
        {title && <AlertTitle>{title}</AlertTitle>}

        {children}
      </Alert>
    </Collapse>
  );
};

AppAlert.propTypes = AppAlertPropTypes;

AppAlert.defaultProps = AppAlertDefaultProps;

export default memo(AppAlert);
