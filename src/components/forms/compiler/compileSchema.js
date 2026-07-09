import { normalizeField } from './normalizeField';
import { createFormAST } from './createFormAST';

export const compileSchema = (schema) => {
  const normalizedFields = schema.fields.map(normalizeField);

  const normalizedSchema = {
    ...schema,

    fields: normalizedFields,
  };

  const ast = createFormAST(normalizedSchema);

  return {
    schema: normalizedSchema,

    ast,
  };
};

export default compileSchema;
