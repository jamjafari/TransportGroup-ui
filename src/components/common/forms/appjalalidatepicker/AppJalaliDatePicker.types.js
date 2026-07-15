import PropTypes from 'prop-types';

export const AppJalaliDatePickerPropTypes = {
  label: PropTypes.string,

  value: PropTypes.any,

  onChange: PropTypes.func,

  disabled: PropTypes.bool,

  fullWidth: PropTypes.bool,

  format: PropTypes.string,
};

export const AppJalaliDatePickerDefaultProps = {
  label: '',

  value: null,

  onChange: () => {},

  disabled: false,

  fullWidth: true,

  format: 'yyyy/MM/dd',
};
