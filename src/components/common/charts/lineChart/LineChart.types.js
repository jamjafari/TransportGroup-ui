import PropTypes from 'prop-types';

export const LineChartPropTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),

  series: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,

      data: PropTypes.arrayOf(PropTypes.number).isRequired,

      color: PropTypes.string,
    }),
  ),

  height: PropTypes.number,

  grid: PropTypes.bool,

  legend: PropTypes.bool,

  tooltip: PropTypes.bool,
};

export const LineChartDefaultProps = {
  categories: [],

  series: [],

  height: 320,

  grid: true,

  legend: true,

  tooltip: true,
};
