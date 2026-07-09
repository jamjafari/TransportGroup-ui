import PropTypes from 'prop-types';

export const FormFieldRendererPropTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,

    type: PropTypes.string.isRequired,

    ui: PropTypes.shape({
      label: PropTypes.string,

      placeholder: PropTypes.string,

      helperText: PropTypes.string,
    }),

    state: PropTypes.shape({
      defaultValue: PropTypes.any,

      disabled: PropTypes.bool,

      hidden: PropTypes.bool,

      readOnly: PropTypes.bool,
    }),

    props: PropTypes.object,

    options: PropTypes.array,

    rules: PropTypes.array,

    condition: PropTypes.any,

    disableIf: PropTypes.any,
  }).isRequired,
};

export const FormFieldRendererDefaultProps = {};
