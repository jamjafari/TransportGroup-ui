import PropTypes from 'prop-types';

export const AppSnackbarPropTypes = {
  open: PropTypes.bool.isRequired,

  message: PropTypes.string,

  severity: PropTypes.oneOf(['success', 'error', 'warning', 'info']),

  autoHideDuration: PropTypes.number,

  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),

    horizontal: PropTypes.oneOf(['left', 'center', 'right']),
  }),

  onClose: PropTypes.func,
};
