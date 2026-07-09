import PropTypes from 'prop-types';

export const KpiCardPropTypes = {
  title: PropTypes.string.isRequired,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  subtitle: PropTypes.string,

  icon: PropTypes.node,

  color: PropTypes.string,

  trend: PropTypes.number,

  loading: PropTypes.bool,

  onClick: PropTypes.func,

  sx: PropTypes.object,
};
