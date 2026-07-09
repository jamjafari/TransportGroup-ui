import PropTypes from 'prop-types';

export const WizardFooterPropTypes = {
  loading: PropTypes.bool,

  nextLabel: PropTypes.string,

  previousLabel: PropTypes.string,

  finishLabel: PropTypes.string,

  cancelLabel: PropTypes.string,

  showCancel: PropTypes.bool,

  onCancel: PropTypes.func,

  sx: PropTypes.object,
};

export const WizardFooterDefaultProps = {
  loading: false,

  nextLabel: 'بعدی',

  previousLabel: 'قبلی',

  finishLabel: 'ثبت نهایی',

  cancelLabel: 'انصراف',

  showCancel: false,

  onCancel: () => {},

  sx: {},
};
