import PropTypes from 'prop-types';

export const KeyValuePropTypes = {
  label: PropTypes.node.isRequired,

  value: PropTypes.node,

  direction: PropTypes.oneOf(['row', 'column']),

  divider: PropTypes.bool,

  labelWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const KeyValueDefaultProps = {
  direction: 'row',

  divider: false,

  labelWidth: 120,
};
