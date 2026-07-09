import PropTypes from 'prop-types';

export const AppAvatarPropTypes = {
  src: PropTypes.string,

  alt: PropTypes.string,

  name: PropTypes.string,

  size: PropTypes.number,

  badge: PropTypes.bool,

  badgeColor: PropTypes.oneOf([
    'default',

    'primary',

    'secondary',

    'success',

    'error',

    'warning',

    'info',
  ]),

  tooltip: PropTypes.string,
};

export const AppAvatarDefaultProps = {
  size: 40,

  badge: false,

  badgeColor: 'success',
};
