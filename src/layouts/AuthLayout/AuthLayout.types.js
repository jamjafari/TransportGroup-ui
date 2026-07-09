import PropTypes from 'prop-types';

export const AuthLayoutPropTypes = {
  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  children: PropTypes.node,
};

export const AuthLayoutDefaultProps = {
  maxWidth: 'sm',

  children: null,
};
