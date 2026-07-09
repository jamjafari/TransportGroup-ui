import PropTypes from 'prop-types';

export const AppStatCardPropTypes = {
  title: PropTypes.string.isRequired,

  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  subtitle: PropTypes.string,

  icon: PropTypes.node,

  color: PropTypes.string,

  trend: PropTypes.number,

  loading: PropTypes.bool,
};

export const AppStatCardDefaultProps = {
  subtitle: '',

  icon: null,

  color: 'primary',

  trend: null,

  loading: false,
};

export const AppStatGroupPropTypes = {
  items: PropTypes.array,

  columns: PropTypes.number,

  spacing: PropTypes.number,
};

export const AppStatGroupDefaultProps = {
  items: [],

  columns: 4,

  spacing: 2,
};
export const AppStatTrendPropTypes = {
  title: PropTypes.string.isRequired,

  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,

  trend: PropTypes.number.isRequired,

  trendLabel: PropTypes.string,

  icon: PropTypes.node,
};

export const AppStatTrendDefaultProps = {
  trendLabel: '',

  icon: null,
};

export const AppCircularStatPropTypes = {
  title: PropTypes.string.isRequired,

  value: PropTypes.number.isRequired,

  subtitle: PropTypes.string,

  size: PropTypes.number,

  thickness: PropTypes.number,

  color: PropTypes.string,
};

export const AppCircularStatDefaultProps = {
  subtitle: '',

  size: 90,

  thickness: 5,

  color: 'primary',
};

export const AppLinearStatPropTypes = {
  title: PropTypes.string.isRequired,

  value: PropTypes.number.isRequired,

  subtitle: PropTypes.string,

  color: PropTypes.oneOf([
    'primary',
    'secondary',
    'success',
    'error',
    'warning',
    'info',
  ]),

  showPercent: PropTypes.bool,
};

export const AppLinearStatDefaultProps = {
  subtitle: '',

  color: 'primary',

  showPercent: true,
};
