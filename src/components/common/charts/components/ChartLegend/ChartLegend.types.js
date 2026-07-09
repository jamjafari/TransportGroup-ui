import PropTypes from 'prop-types';

export const ChartLegendPropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,

      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

      color: PropTypes.string,

      percent: PropTypes.number,
    }),
  ).isRequired,
};

export const ChartLegendDefaultProps = {
  items: [],
};
