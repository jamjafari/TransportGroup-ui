import PropTypes from 'prop-types';

export const AppTextareaFieldPropTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,

    ui: PropTypes.shape({
      label: PropTypes.string,

      placeholder: PropTypes.string,

      helperText: PropTypes.string,
    }).isRequired,

    state: PropTypes.shape({
      defaultValue: PropTypes.any,

      disabled: PropTypes.bool,

      hidden: PropTypes.bool,

      readOnly: PropTypes.bool,
    }).isRequired,

    props: PropTypes.object,
  }).isRequired,
};

export const AppTextareaFieldDefaultProps = {};
