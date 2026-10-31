import React from "react";

import PropTypes from "prop-types";

import { Alert, AlertTitle } from "@mui/material";
import { useTranslation } from "react-i18next";

const AppAlertItem = ({ severity, title, description }) => {
  const { t } = useTranslation();
  return (
    <Alert
      sx={{ width: "100%", typography: "bodyText" }}
      severity={severity}
    >
      <AlertTitle sx={{ typography: "alertTitle" }}>{t(title)}</AlertTitle>

      {description}
    </Alert>
  );
};

AppAlertItem.propTypes = {
  severity: PropTypes.string.isRequired,

  title: PropTypes.string.isRequired,

  description: PropTypes.string.isRequired,
};

export default AppAlertItem;
