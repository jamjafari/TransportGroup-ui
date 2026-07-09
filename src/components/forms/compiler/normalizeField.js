import { parseCondition } from '../conditional';

export const normalizeField = (field) => {
  return {
    // ===== Identity =====
    name: field.name,

    type: field.type,

    // ===== UI =====
    ui: {
      label: field.ui?.label ?? field.label ?? '',

      placeholder: field.ui?.placeholder ?? '',

      helperText: field.ui?.helperText ?? '',
    },

    // ===== State =====
    state: {
      defaultValue: field.state?.defaultValue ?? '',

      disabled: field.state?.disabled ?? false,

      hidden: field.state?.hidden ?? false,

      readOnly: field.state?.readOnly ?? false,
    },

    // ===== Component Props =====
    props: field.props ?? {},

    // ===== Options =====
    options: field.options ?? [],

    // ===== Validation =====
    rules: field.rules ?? [],

    // ===== Conditional =====
    condition: parseCondition(field.condition),

    disableIf: parseCondition(field.disableIf),
  };
};
