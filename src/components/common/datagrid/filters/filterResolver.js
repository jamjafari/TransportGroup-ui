export const applyTextFilter = (value, filter) => {
  const v = String(value || '').toLowerCase();

  const f = String(filter.value || '').toLowerCase();

  switch (filter.operator) {
    case 'contains':
      return v.includes(f);

    case 'equals':
      return v === f;

    case 'startsWith':
      return v.startsWith(f);

    case 'endsWith':
      return v.endsWith(f);

    default:
      return true;
  }
};

export const applyNumberFilter = (value, filter) => {
  const v = Number(value);

  const f = Number(filter.value);

  switch (filter.operator) {
    case 'equals':
      return v === f;

    case 'gt':
      return v > f;

    case 'lt':
      return v < f;

    case 'gte':
      return v >= f;

    case 'lte':
      return v <= f;

    default:
      return true;
  }
};

export const applyDateFilter = (value, filter) => {
  const v = new Date(value).getTime();

  const f = new Date(filter.value).getTime();

  switch (filter.operator) {
    case 'before':
      return v < f;

    case 'after':
      return v > f;

    case 'equals':
      return v === f;

    default:
      return true;
  }
};

export const applyBooleanFilter = (value, filter) => {
  return Boolean(value) === Boolean(filter.value);
};
