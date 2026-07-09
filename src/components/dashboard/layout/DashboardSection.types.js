import PropTypes from 'prop-types';

export const DashboardSectionPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  children: PropTypes.node,

  spacing: PropTypes.number,
};

export const DashboardSectionDefaultProps = {
  title: '',

  subtitle: '',

  spacing: null,
};
