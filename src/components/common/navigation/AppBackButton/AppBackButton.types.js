import PropTypes from 'prop-types';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const AppBackButtonPropTypes = {
  fallback: PropTypes.string,

  tooltip: PropTypes.string,

  icon: PropTypes.node,

  onClick: PropTypes.func,
};

export const AppBackButtonDefaultProps = {
  fallback: '/',

  tooltip: 'بازگشت',

  icon: <ArrowBackIcon />,

  onClick: null,
};
