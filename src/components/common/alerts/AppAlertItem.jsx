import React from 'react';

import PropTypes from 'prop-types';

import { Alert, AlertTitle } from '@mui/material';

const AppAlertItem = ({ severity, title, description }) => {
  return (
    <Alert
      sx={{ width: '100%', fontSize: 16, fontWeight: 700 }}
      severity={severity}
    >
      <AlertTitle sx={{ fontSize: 18, fontWeight: 800 }}>{title}</AlertTitle>

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
