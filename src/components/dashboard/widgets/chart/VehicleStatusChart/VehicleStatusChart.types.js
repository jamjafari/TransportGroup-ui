import PropTypes from 'prop-types';

export const VehicleStatusChartPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export const VehicleStatusChartDefaultProps = {
  title: 'وضعیت ناوگان',

  subtitle: 'وضعیت فعلی خودروها',

  height: 320,
};
