import PropTypes from 'prop-types';

export const VehicleUsageChartPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const VehicleUsageChartDefaultProps = {
  title: 'استفاده از ناوگان',

  subtitle: '30 روز اخیر',

  height: 320,
};
