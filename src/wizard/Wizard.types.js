import PropTypes from 'prop-types';

export const WizardStepPropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,

  title: PropTypes.string.isRequired,

  schema: PropTypes.object.isRequired,

  onSubmit: PropTypes.func,
});

export const AppWizardPropTypes = {
  steps: PropTypes.arrayOf(WizardStepPropType).isRequired,

  initialStep: PropTypes.number,

  defaultValues: PropTypes.object,

  resolver: PropTypes.func,

  onSubmit: PropTypes.func,
};

export const AppWizardDefaultProps = {
  initialStep: 0,

  defaultValues: {},

  resolver: undefined,

  onSubmit: () => {},
};

export const WizardHeaderPropTypes = {};

export const WizardHeaderDefaultProps = {};

export const WizardBodyPropTypes = {};

export const WizardBodyDefaultProps = {};

export const WizardFooterPropTypes = {};

export const WizardFooterDefaultProps = {};
