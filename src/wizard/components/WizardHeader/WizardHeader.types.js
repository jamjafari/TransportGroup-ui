import PropTypes from 'prop-types';

export const WizardHeaderPropTypes = {
  showProgress: PropTypes.bool,

  showDescription: PropTypes.bool,

  sx: PropTypes.object,
};

export const WizardHeaderDefaultProps = {
  showProgress: true,

  showDescription: true,

  sx: {},
};
