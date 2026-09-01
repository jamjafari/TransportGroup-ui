import { useContext } from 'react';
import TenantContext from './TenantContext';

const useTenantContext = () => {
  const context = useContext(TenantContext);
  if (!context)
    throw new Error('useTenantContext must be used inside TenantProvider.');
  return context;
};

export default useTenantContext;
