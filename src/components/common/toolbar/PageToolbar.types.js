import PropTypes from 'prop-types';

export const PageToolbarPropTypes = {
  title: PropTypes.string,

  children: PropTypes.node,

  actions: PropTypes.node,

  search: PropTypes.node,

  filters: PropTypes.node,

  sx: PropTypes.object,
};
