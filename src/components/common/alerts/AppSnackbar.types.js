import PropTypes from 'prop-types';

export const AppSnackbarPropTypes = {
  open: PropTypes.bool,

  message: PropTypes.string,

  severity: PropTypes.oneOf(['success', 'info', 'warning', 'error']),

  autoHideDuration: PropTypes.number,

  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),

    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),

  onClose: PropTypes.func,
};

export const AppSnackbarDefaultProps = {
  open: false,

  severity: 'info',

  autoHideDuration: 4000,

  anchorOrigin: {
    vertical: 'top',

    horizontal: 'right',
  },
};
