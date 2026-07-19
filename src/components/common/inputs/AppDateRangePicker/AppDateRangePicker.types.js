import PropTypes from 'prop-types';

export const AppDateRangePickerPropTypes = {
  label: PropTypes.string,

  value: PropTypes.shape({
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
  }),

  disabled: PropTypes.bool,

  onChange: PropTypes.func,
};

export const AppDateRangePickerDefaultProps = {
  label: '',

  value: {
    fromDate: '',
    toDate: '',
  },

  disabled: false,

  onChange: () => {},
};
