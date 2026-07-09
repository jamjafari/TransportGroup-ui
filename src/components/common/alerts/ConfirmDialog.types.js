import PropTypes from 'prop-types';

export const ConfirmDialogPropTypes = {
  open: PropTypes.bool,

  title: PropTypes.string,

  message: PropTypes.string,

  confirmText: PropTypes.string,

  cancelText: PropTypes.string,

  confirmColor: PropTypes.string,

  loading: PropTypes.bool,

  onConfirm: PropTypes.func,

  onCancel: PropTypes.func,
};

export const ConfirmDialogDefaultProps = {
  open: false,

  title: 'Confirmation',

  message: '',

  confirmText: 'Confirm',

  cancelText: 'Cancel',

  confirmColor: 'primary',

  loading: false,
};
