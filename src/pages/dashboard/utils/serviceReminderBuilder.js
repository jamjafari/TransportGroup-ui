export const buildServiceReminders = (services, vehicles) => {
  return services.map((service) => {
    const vehicle = vehicles.find((v) => v.id === service.vehicleId);

    const currentKm = vehicle?.odometerKm ?? 0;

    const remainKm = service.nextServiceKm - currentKm;

    let status = 'Active';

    if (remainKm <= 0) {
      status = 'Critical';
    } else if (remainKm <= 2000) {
      status = 'Warning';
    }

    return {
      id: service.id,

      vehicleId: service.vehicleId,

      vehicleName: service.vehicleName,

      serviceType: service.serviceType,

      currentKm,

      serviceKm: service.nextServiceKm,

      remainKm,

      status,
    };
  });
};
