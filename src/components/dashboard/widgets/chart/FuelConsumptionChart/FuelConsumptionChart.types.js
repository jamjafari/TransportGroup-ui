import PropTypes from 'prop-types';

export const FuelConsumptionChartPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  loading: PropTypes.bool,
};

export const FuelConsumptionChartDefaultProps = {
  title: 'مصرف سوخت',

  subtitle: '30 روز اخیر',

  height: 320,

  loading: false,
};
