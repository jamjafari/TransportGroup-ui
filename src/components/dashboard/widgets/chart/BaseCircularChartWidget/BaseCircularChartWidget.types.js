import PropTypes from 'prop-types';

export const BaseCircularChartWidgetPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  chartComponent: PropTypes.elementType.isRequired,

  data: PropTypes.array.isRequired,
};

export const BaseCircularChartWidgetDefaultProps = {
  title: '',

  subtitle: '',

  height: 320,
};
