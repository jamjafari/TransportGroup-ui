import PropTypes from 'prop-types';

export const AppBadgePropTypes = {
  children: PropTypes.node.isRequired,

  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  color: PropTypes.oneOf([
    'default',

    'primary',

    'secondary',

    'success',

    'error',

    'warning',

    'info',
  ]),

  variant: PropTypes.oneOf(['standard', 'dot']),

  max: PropTypes.number,

  invisible: PropTypes.bool,

  overlap: PropTypes.oneOf(['rectangular', 'circular']),

  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.oneOf(['top', 'bottom']),

    horizontal: PropTypes.oneOf(['left', 'right']),
  }),
};

export const AppBadgeDefaultProps = {
  content: 0,

  color: 'primary',

  variant: 'standard',

  max: 99,

  invisible: false,

  overlap: 'rectangular',

  anchorOrigin: {
    vertical: 'top',

    horizontal: 'right',
  },
};
