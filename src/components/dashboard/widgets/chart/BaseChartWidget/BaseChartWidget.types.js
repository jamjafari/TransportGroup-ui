import PropTypes from 'prop-types';

export const BaseChartWidgetPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  chartComponent: PropTypes.elementType.isRequired,

  categories: PropTypes.array.isRequired,

  series: PropTypes.array.isRequired,
};

export const BaseChartWidgetDefaultProps = {
  title: '',

  subtitle: '',

  height: 320,
};
