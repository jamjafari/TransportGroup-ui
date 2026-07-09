import PropTypes from 'prop-types';

export const AppGridPropTypes = {
  children: PropTypes.node,

  container: PropTypes.bool,

  spacing: PropTypes.number,

  columns: PropTypes.number,

  alignItems: PropTypes.string,

  justifyContent: PropTypes.string,
};

export const AppGridDefaultProps = {
  children: null,

  container: false,

  spacing: 2,

  columns: 12,

  alignItems: 'stretch',

  justifyContent: 'flex-start',
};
