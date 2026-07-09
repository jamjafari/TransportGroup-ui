import PropTypes from 'prop-types';

export const AreaChartPropTypes = {
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

export const AreaChartDefaultProps = {
  categories: [],

  series: [],

  height: 320,

  grid: true,

  legend: true,

  tooltip: true,
};
