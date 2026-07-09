import { NODE_TYPES } from '../layout/layoutTypes';

import buildLayoutTree from './buildLayoutTree';

export const createFormAST = (schema) => {
  return {
    type: NODE_TYPES.FORM,

    id: schema.id,

    title: schema.title,

    submitLabel: schema.submitLabel,

    children: [
      buildLayoutTree(
        schema.layout,

        schema.fields,
      ),
    ],
  };
};

export default createFormAST;
