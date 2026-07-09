import PropTypes from 'prop-types';

export const AppLinkPropTypes = {
  to: PropTypes.string.isRequired,

  external: PropTypes.bool,

  underline: PropTypes.oneOf(['always', 'hover', 'none']),

  color: PropTypes.string,

  children: PropTypes.node,
};

export const AppLinkDefaultProps = {
  external: false,

  underline: 'hover',

  color: 'primary',

  children: null,
};
