import PropTypes from 'prop-types';

export const AppSidebarPropTypes = {
  items: PropTypes.array.isRequired,

  collapsed: PropTypes.bool,

  header: PropTypes.node,

  footer: PropTypes.node,
};

export const AppSidebarDefaultProps = {
  collapsed: false,

  header: null,

  footer: null,
};
