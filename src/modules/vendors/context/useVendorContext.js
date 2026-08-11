import { useContext } from 'react';
import VendorContext from './VendorContext';

const useVendorContext = () => {
  const context = useContext(VendorContext);

  if (!context) {
    throw new Error('useVendorContext must be used inside VendorProvider.');
  }

  return context;
};

export default useVendorContext;
