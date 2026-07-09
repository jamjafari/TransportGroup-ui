import PropTypes from 'prop-types';

export const AppContainerPropTypes = {
  children: PropTypes.node,

  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),

  disableGutters: PropTypes.bool,

  fixed: PropTypes.bool,
};

export const AppContainerDefaultProps = {
  children: null,

  maxWidth: 'lg',

  disableGutters: false,

  fixed: false,
};
