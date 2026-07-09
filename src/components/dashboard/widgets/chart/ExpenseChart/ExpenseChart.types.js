import PropTypes from 'prop-types';

export const ExpenseChartPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const ExpenseChartDefaultProps = {
  title: 'روند هزینه‌ها',

  subtitle: '30 روز اخیر',

  height: 320,
};
