import PropTypes from 'prop-types';

export const AppStackPropTypes = {
  children: PropTypes.node,

  direction: PropTypes.oneOf([
    'row',
    'column',
    'row-reverse',
    'column-reverse',
  ]),

  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

  alignItems: PropTypes.string,

  justifyContent: PropTypes.string,

  flexWrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
};

export const AppStackDefaultProps = {
  children: null,

  direction: 'column',

  spacing: 2,

  alignItems: 'stretch',

  justifyContent: 'flex-start',

  flexWrap: 'nowrap',
};
