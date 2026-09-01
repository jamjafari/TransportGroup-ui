import { AuthProvider } from '@/context/auth';
import { TenantProvider } from '@/context/tenant';

import { AppRouter } from '@/routes';

function App() {
  return (
    <AuthProvider>
      <TenantProvider>
        <AppRouter />
      </TenantProvider>
    </AuthProvider>
  );
}

export default App;
