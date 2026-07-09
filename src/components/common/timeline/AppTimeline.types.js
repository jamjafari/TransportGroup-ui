import PropTypes from 'prop-types';

export const AppTimelinePropTypes = {
  position: PropTypes.oneOf([
    'left',

    'right',

    'alternate',

    'alternate-reverse',
  ]),

  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

      time: PropTypes.node,

      title: PropTypes.node,

      description: PropTypes.node,

      icon: PropTypes.node,

      color: PropTypes.oneOf([
        'primary',

        'secondary',

        'success',

        'error',

        'warning',

        'info',

        'grey',
      ]),

      variant: PropTypes.oneOf(['filled', 'outlined']),
    }),
  ),
};

export const AppTimelineDefaultProps = {
  position: 'right',

  items: [],
};
