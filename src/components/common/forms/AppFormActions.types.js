import PropTypes from 'prop-types';

export const AppFormActionsPropTypes = {
  children: PropTypes.node.isRequired,

  align: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between']),

  spacing: PropTypes.number,

  divider: PropTypes.bool,
};

export const AppFormActionsDefaultProps = {
  align: 'flex-end',

  spacing: 2,

  divider: true,
};
