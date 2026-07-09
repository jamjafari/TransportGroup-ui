import PropTypes from 'prop-types';

export const FilterDrawerPropTypes = {
  open: PropTypes.bool.isRequired,

  title: PropTypes.string,

  children: PropTypes.node,

  loading: PropTypes.bool,

  width: PropTypes.number,

  onApply: PropTypes.func,

  onReset: PropTypes.func,

  onClose: PropTypes.func,
};
