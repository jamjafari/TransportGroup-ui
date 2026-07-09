import { useWatch } from 'react-hook-form';

import { evaluateCondition } from './evaluateCondition';

export const useConditionalFields = (fields, control) => {
  const values = useWatch({ control });

  const processedFields = fields
    .filter((field) => {
      if (!field.condition) return true;

      return evaluateCondition(field.condition, values);
    })
    .map((field) => {
      let finalField = { ...field };

      if (field.disableIf) {
        finalField.disabled = evaluateCondition(field.disableIf, values);
      }

      return finalField;
    });

  return processedFields;
};
