import { useTenantContext } from '@/context/tenant';

const usePlanLimits = () => {
  const { tenant } = useTenantContext();

  const canAddVehicle =
    !tenant ||
    tenant.maxVehicles == null ||
    tenant.currentVehicleCount < tenant.maxVehicles;

  const canAddUser =
    !tenant ||
    tenant.maxUsers == null ||
    tenant.currentUserCount < tenant.maxUsers;

  return { tenant, canAddVehicle, canAddUser };
};

export default usePlanLimits;
