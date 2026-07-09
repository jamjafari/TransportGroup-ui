import React, { memo } from 'react';

import formFieldMap from './formFieldMap';

import {
  FormFieldRendererPropTypes,
  FormFieldRendererDefaultProps,
} from './FormFieldRenderer.types';

const FormFieldRenderer = ({ field }) => {
  const Component = formFieldMap[field.fieldType];

  if (!Component) {
    console.warn(`Unknown field type: ${field.fieldType}`);
    return null;
  }

  return <Component field={field} />;
};

FormFieldRenderer.propTypes = FormFieldRendererPropTypes;

FormFieldRenderer.defaultProps = FormFieldRendererDefaultProps;

export default memo(FormFieldRenderer);
