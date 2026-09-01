import { useTenant } from '@/hooks';
import { canAddVehicle, canAddUser } from '@/core/auth';
import { useAuth } from '@/context';

const usePlanLimits = (currentVehicleCount = 0, currentUserCount = 0) => {
  const { user } = useAuth();
  const { tenant } = useTenant();

  return {
    tenant,
    canAddVehicle: canAddVehicle(user, currentVehicleCount),
    canAddUser: canAddUser(user, currentUserCount),
  };
};

export default usePlanLimits;
