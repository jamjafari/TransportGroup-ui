import PropTypes from 'prop-types';

export const FormHelperTextPropTypes = {
  children: PropTypes.node.isRequired,

  error: PropTypes.bool,

  color: PropTypes.string,
};

export const FormHelperTextDefaultProps = {
  error: false,

  color: 'text.secondary',
};
