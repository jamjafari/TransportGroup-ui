import PropTypes from 'prop-types';

export const PieChartPropTypes = {
  labels: PropTypes.arrayOf(PropTypes.string),

  series: PropTypes.arrayOf(PropTypes.number),

  height: PropTypes.number,

  legend: PropTypes.bool,

  tooltip: PropTypes.bool,
};

export const PieChartDefaultProps = {
  labels: [],

  series: [],

  height: 320,

  legend: true,

  tooltip: true,
};
