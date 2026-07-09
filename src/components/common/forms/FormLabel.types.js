import PropTypes from 'prop-types';

export const FormLabelPropTypes = {
  children: PropTypes.node.isRequired,

  required: PropTypes.bool,

  color: PropTypes.string,
};

export const FormLabelDefaultProps = {
  required: false,

  color: 'text.primary',
};
