import PropTypes from 'prop-types';

export const ConfirmDialogPropTypes = {
  open: PropTypes.bool.isRequired,

  title: PropTypes.string,

  message: PropTypes.string,

  confirmText: PropTypes.string,

  cancelText: PropTypes.string,

  loading: PropTypes.bool,

  severity: PropTypes.oneOf(['info', 'success', 'warning', 'error']),

  onConfirm: PropTypes.func,

  onCancel: PropTypes.func,
};
