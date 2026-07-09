import React, { useMemo } from 'react';

import { useFormContext } from 'react-hook-form';

import RHFProvider from '../rhf/RHFProvider';

import AppForm from '../../components/common/forms/AppForm';

import FormFieldRenderer from './FormFieldRenderer';

import { compileSchema } from '../compiler';

import { useConditionalFields } from '../conditional';

import LayoutEngine from '../layout/LayoutEngine';

const FormInner = ({ ast, onSubmit }) => {
  const methods = useFormContext();

  return (
    <AppForm onSubmit={methods.handleSubmit(onSubmit)}>
      <LayoutEngine node={ast} />
    </AppForm>
  );
};

const FormBuilder = ({
  schema,

  defaultValues,

  onSubmit = () => {},

  standalone = true,

  resolver,

  mode = 'onChange',

  children,
}) => {
  const compiled = useMemo(() => compileSchema(schema), [schema]);

  if (!standalone) {
    return <FormInner ast={compiled.ast} onSubmit={onSubmit} />;
  }

  return (
    <RHFProvider defaultValues={defaultValues} resolver={resolver} mode={mode}>
      {children ? (
        children
      ) : (
        <FormInner ast={compiled.ast} onSubmit={onSubmit} />
      )}
    </RHFProvider>
  );
};

export default FormBuilder;
