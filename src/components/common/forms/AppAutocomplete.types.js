import PropTypes from 'prop-types';

export const AppAutocompletePropTypes = {
  id: PropTypes.string,

  name: PropTypes.string,

  label: PropTypes.string,

  value: PropTypes.any,

  options: PropTypes.array,

  placeholder: PropTypes.string,

  helperText: PropTypes.node,

  error: PropTypes.bool,

  disabled: PropTypes.bool,

  required: PropTypes.bool,

  fullWidth: PropTypes.bool,

  size: PropTypes.oneOf(['small', 'medium']),

  loading: PropTypes.bool,

  multiple: PropTypes.bool,

  disableClearable: PropTypes.bool,

  getOptionLabel: PropTypes.func,

  isOptionEqualToValue: PropTypes.func,

  onChange: PropTypes.func,

  onInputChange: PropTypes.func,
};

export const AppAutocompleteDefaultProps = {
  value: null,

  options: [],

  placeholder: '',

  helperText: '',

  error: false,

  disabled: false,

  required: false,

  fullWidth: true,

  size: 'small',

  loading: false,

  multiple: false,

  disableClearable: false,

  getOptionLabel: (option) => option?.label ?? '',

  isOptionEqualToValue: (option, value) => option?.value === value?.value,
};
