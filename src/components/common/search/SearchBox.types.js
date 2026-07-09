import PropTypes from 'prop-types';

export const SearchBoxPropTypes = {
  value: PropTypes.string,

  onChange: PropTypes.func,

  placeholder: PropTypes.string,

  loading: PropTypes.bool,

  debounce: PropTypes.number,

  fullWidth: PropTypes.bool,

  autoFocus: PropTypes.bool,
};
