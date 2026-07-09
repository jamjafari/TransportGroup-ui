import PropTypes from 'prop-types';

export const DashboardContainerPropTypes = {
  children: PropTypes.node,

  maxWidth: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', false]),
};

export const DashboardContainerDefaultProps = {
  maxWidth: 'xl',
};
