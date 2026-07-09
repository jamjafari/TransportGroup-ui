import PropTypes from 'prop-types';

export const ChartEmptyPropTypes = {
  title: PropTypes.string,

  height: PropTypes.number,
};

export const ChartEmptyDefaultProps = {
  title: 'No chart data available',

  height: 320,
};
