import PropTypes from 'prop-types';

export const AppStepperPropTypes = {
  activeStep: PropTypes.number,

  orientation: PropTypes.oneOf(['horizontal', 'vertical']),

  alternativeLabel: PropTypes.bool,

  sx: PropTypes.object,

  steps: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

      label: PropTypes.node.isRequired,

      completed: PropTypes.bool,

      disabled: PropTypes.bool,
    }),
  ),
};

export const AppStepperDefaultProps = {
  activeStep: 0,

  orientation: 'horizontal',

  alternativeLabel: true,

  sx: {},

  steps: [],
};
