import PropTypes from 'prop-types';

export const DonutChartPropTypes = {
  data: PropTypes.array.isRequired,

  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  legend: PropTypes.bool,

  tooltip: PropTypes.bool,
};

export const DonutChartDefaultProps = {
  height: 320,

  legend: true,

  tooltip: true,
};
