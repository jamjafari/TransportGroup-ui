import PropTypes from 'prop-types';

export const FuelCostChartPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const FuelCostChartDefaultProps = {
  title: 'هزینه سوخت',

  subtitle: '30 روز اخیر',

  height: 320,
};
