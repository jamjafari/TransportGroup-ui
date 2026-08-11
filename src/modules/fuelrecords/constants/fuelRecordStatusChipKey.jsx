export const FUEL_TYPE = {
  GASOLINE: 1,
  DIESEL: 2,
  HYBRID: 3,
  ELECTRIC: 4,
};

export const fuelTypeOptions = [
  { value: FUEL_TYPE.GASOLINE, label: 'بنزین' },
  { value: FUEL_TYPE.DIESEL, label: 'گازوئیل' },
  { value: FUEL_TYPE.HYBRID, label: ' سی ان جی' },
  { value: FUEL_TYPE.ELECTRIC, label: 'برق' },
];

export const attachmentCategoryOptions = [
  { value: 1, label: 'تگ سوختگیری' },
  { value: 2, label: 'سایر مدرک سوختگیری' },
];
export const fuelTankStatusChipKey = (fullTank) =>
  fullTank ? 'TankFull' : 'TankNotFull';
