import PropTypes from 'prop-types';

export const AppFormSectionPropTypes = {
  title: PropTypes.string,

  subtitle: PropTypes.string,

  children: PropTypes.node.isRequired,

  divider: PropTypes.bool,
};

export const AppFormSectionDefaultProps = {
  divider: false,
};
