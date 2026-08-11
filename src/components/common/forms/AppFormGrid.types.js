import PropTypes from 'prop-types';

export const AppFormGridPropTypes = {
  children: PropTypes.node,

  spacing: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      xs: PropTypes.number,
      sm: PropTypes.number,
      md: PropTypes.number,
      lg: PropTypes.number,
      xl: PropTypes.number,
    }),
  ]),

  rowSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

  columnSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),

  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
  ]),

  sx: PropTypes.object,

  className: PropTypes.string,
};

export const AppFormGridDefaultProps = {
  children: null,

  spacing: 2,

  rowSpacing: undefined,

  columnSpacing: undefined,

  direction: 'row-reverse',

  sx: {},

  className: undefined,
};
