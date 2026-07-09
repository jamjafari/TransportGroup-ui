import PropTypes from 'prop-types';

export const AppNavbarPropTypes = {
  title: PropTypes.string,

  onMenuClick: PropTypes.func,

  showMenuButton: PropTypes.bool,

  startAdornment: PropTypes.node,

  endAdornment: PropTypes.node,
};

export const AppNavbarDefaultProps = {
  title: '',

  onMenuClick: () => {},

  showMenuButton: true,

  startAdornment: null,

  endAdornment: null,
};
