import PropTypes from 'prop-types';

export const AppRadioGroupFieldPropTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,

    ui: PropTypes.shape({
      label: PropTypes.string,

      helperText: PropTypes.string,
    }).isRequired,

    state: PropTypes.shape({
      defaultValue: PropTypes.any,

      disabled: PropTypes.bool,

      hidden: PropTypes.bool,

      readOnly: PropTypes.bool,
    }).isRequired,

    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.any.isRequired,

        label: PropTypes.string.isRequired,
      }),
    ),

    props: PropTypes.object,
  }).isRequired,
};

export const AppRadioGroupFieldDefaultProps = {};
