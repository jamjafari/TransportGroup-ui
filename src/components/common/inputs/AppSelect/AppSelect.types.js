import PropTypes from 'prop-types';

export const AppSelectPropTypes = {
  label: PropTypes.string,

  value: PropTypes.any,

  items: PropTypes.array,

  loading: PropTypes.bool,

  required: PropTypes.bool,

  disabled: PropTypes.bool,

  fullWidth: PropTypes.bool,

  onChange: PropTypes.func,
};

export const AppSelectDefaultProps = {
  label: '',

  value: '',

  items: [],

  loading: false,

  required: false,

  disabled: false,

  fullWidth: true,

  onChange: () => {},
};
