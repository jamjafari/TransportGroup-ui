import PropTypes from 'prop-types';

export const AppChartCardPropTypes = {
  title: PropTypes.string,

  subheader: PropTypes.string,

  action: PropTypes.node,

  menu: PropTypes.bool,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  children: PropTypes.node,

  footer: PropTypes.node,
};

export const AppChartCardDefaultProps = {
  menu: false,

  height: 420,
};
