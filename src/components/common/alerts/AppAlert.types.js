import PropTypes from 'prop-types';

export const AppAlertPropTypes = {
  open: PropTypes.bool,

  severity: PropTypes.oneOf(['success', 'info', 'warning', 'error']),

  variant: PropTypes.oneOf(['standard', 'outlined', 'filled']),

  title: PropTypes.string,

  children: PropTypes.node,

  action: PropTypes.node,

  onClose: PropTypes.func,
};

export const AppAlertDefaultProps = {
  open: true,

  severity: 'info',

  variant: 'standard',
};
