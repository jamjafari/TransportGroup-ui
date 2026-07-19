import PropTypes from 'prop-types';

export const AppAutocompletePropTypes = {
  label: PropTypes.string,

  value: PropTypes.any,

  options: PropTypes.array,

  loading: PropTypes.bool,

  required: PropTypes.bool,

  disabled: PropTypes.bool,

  onChange: PropTypes.func,
};

export const AppAutocompleteDefaultProps = {
  label: '',

  value: null,

  options: [],

  loading: false,

  required: false,

  disabled: false,

  onChange: () => {},
};
