import PropTypes from 'prop-types';

export const DescriptionListPropTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

      label: PropTypes.node.isRequired,

      value: PropTypes.node,
    }),
  ),

  columns: PropTypes.oneOf([
    1,

    2,

    3,

    4,
  ]),

  labelWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const DescriptionListDefaultProps = {
  items: [],

  columns: 2,

  labelWidth: 120,
};
