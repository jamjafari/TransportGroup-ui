import PropTypes from 'prop-types';

export const AppDrawerPropTypes = {
  open: PropTypes.bool,

  onClose: PropTypes.func,

  variant: PropTypes.oneOf(['temporary', 'persistent', 'permanent']),

  width: PropTypes.number,

  items: PropTypes.array.isRequired,

  collapsed: PropTypes.bool,

  header: PropTypes.node,

  footer: PropTypes.node,
};

export const AppDrawerDefaultProps = {
  open: true,

  onClose: () => {},

  variant: 'permanent',

  width: 280,

  collapsed: false,

  header: null,

  footer: null,
};
