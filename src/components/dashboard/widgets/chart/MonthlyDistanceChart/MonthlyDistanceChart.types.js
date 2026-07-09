import PropTypes from 'prop-types';

export const MonthlyDistanceChartPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const MonthlyDistanceChartDefaultProps = {
  title: 'مسافت طی شده',

  subtitle: '30 روز اخیر',

  height: 320,
};
