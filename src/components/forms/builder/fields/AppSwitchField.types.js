import PropTypes from 'prop-types';

export const AppSwitchFieldPropTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,

    ui: PropTypes.shape({
      label: PropTypes.string,

      helperText: PropTypes.string,
    }).isRequired,

    state: PropTypes.shape({
      defaultValue: PropTypes.bool,

      disabled: PropTypes.bool,

      hidden: PropTypes.bool,

      readOnly: PropTypes.bool,
    }).isRequired,

    props: PropTypes.object,
  }).isRequired,
};

export const AppSwitchFieldDefaultProps = {};
