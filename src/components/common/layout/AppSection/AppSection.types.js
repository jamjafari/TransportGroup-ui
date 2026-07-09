import PropTypes from 'prop-types';

export const AppSectionPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  children: PropTypes.node,

  divider: PropTypes.bool,

  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export const AppSectionDefaultProps = {
  title: '',

  subtitle: '',

  children: null,

  divider: true,

  spacing: 4,
};
