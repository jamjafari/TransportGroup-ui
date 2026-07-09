import PropTypes from 'prop-types';

export const AppDialogPropTypes = {
  open: PropTypes.bool.isRequired,

  title: PropTypes.string,

  children: PropTypes.node,

  actions: PropTypes.node,

  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),

  fullWidth: PropTypes.bool,

  loading: PropTypes.bool,

  onClose: PropTypes.func,

  dividers: PropTypes.bool,
};
