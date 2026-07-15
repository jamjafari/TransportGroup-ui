import PropTypes from 'prop-types';

export const AppBackButtonPropTypes = {
  fallback: PropTypes.string,

  tooltip: PropTypes.string,

  icon: PropTypes.node,

  onClick: PropTypes.func,
};

export const AppBackButtonDefaultProps = {
  fallback: '/',

  tooltip: 'بازگشت',

  onClick: null,
};
