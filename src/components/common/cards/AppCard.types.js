import PropTypes from 'prop-types';

export const AppCardPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  children: PropTypes.node,

  icon: PropTypes.node,

  actions: PropTypes.node,

  footer: PropTypes.node,

  loading: PropTypes.bool,

  elevation: PropTypes.number,

  sx: PropTypes.object,
};
