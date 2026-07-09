import PropTypes from 'prop-types';

export const AppFormPropTypes = {
  children: PropTypes.node.isRequired,

  onSubmit: PropTypes.func,

  spacing: PropTypes.number,

  noValidate: PropTypes.bool,
};

export const AppFormDefaultProps = {
  spacing: 2,

  noValidate: true,
};
