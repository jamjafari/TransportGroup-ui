import PropTypes from 'prop-types';

export const DriverPerformanceChartPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const DriverPerformanceChartDefaultProps = {
  title: 'عملکرد رانندگان',

  subtitle: '10 راننده برتر',

  height: 320,
};
