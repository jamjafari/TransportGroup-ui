export const ACTIVITY_ACTION_LABELS = {
  Create: 'ایجاد',
  Update: 'ویرایش',
  Delete: 'حذف',
};

export const activityActionChipKey = (action) => {
  switch (action) {
    case 'Create':
      return 'Success';
    case 'Update':
      return 'warning';
    case 'Delete':
      return 'error';
    default:
      return action;
  }
};

export const ACTIVITY_TYPE_LABELS = {
  Mission: 'ماموریت',
  Fuel: 'سوخت‌گیری',
  Expense: 'هزینه',
  Service: 'سرویس',
};
