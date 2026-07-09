import PropTypes from 'prop-types';

export const FormFieldPropTypes = {
  label: PropTypes.node,

  required: PropTypes.bool,

  helperText: PropTypes.node,

  error: PropTypes.bool,

  children: PropTypes.node.isRequired,
};

export const FormFieldDefaultProps = {
  required: false,

  error: false,
};
