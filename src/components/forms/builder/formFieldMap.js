import AppTextField from '../fields/AppTextField';
import AppNumberField from '../fields/AppNumberField';
import AppPasswordField from '../fields/AppPasswordField';
import AppTextareaField from '../fields/AppTextareaField';
import AppSelectField from '../fields/AppSelectField';
import AppAutocompleteField from '../fields/AppAutocompleteField';
import AppCheckboxField from '../fields/AppCheckboxField';
import AppSwitchField from '../fields/AppSwitchField';
import AppRadioGroupField from '../fields/AppRadioGroupField';
import AppDateField from '../fields/AppDateField';
import AppDateTimeField from '../fields/AppDateTimeField';
import AppTimeField from '../fields/AppTimeField';
import AppFileUploadField from '../fields/AppFileUploadField';

const formFieldMap = {
  text: AppTextField,

  number: AppNumberField,

  password: AppPasswordField,

  textarea: AppTextareaField,

  select: AppSelectField,

  autocomplete: AppAutocompleteField,

  checkbox: AppCheckboxField,

  switch: AppSwitchField,

  radio: AppRadioGroupField,

  date: AppDateField,

  datetime: AppDateTimeField,

  time: AppTimeField,

  file: AppFileUploadField,
};

export default formFieldMap;
