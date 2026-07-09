import PropTypes from 'prop-types';

export const AppPagePropTypes = {
  children: PropTypes.node,

  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),

  disableContainer: PropTypes.bool,

  padding: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const AppPageDefaultProps = {
  children: null,

  maxWidth: 'lg',

  disableContainer: false,

  padding: 3,
};
