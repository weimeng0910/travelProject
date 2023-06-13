import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
//import { AuthProvider } from './AuthContext';
/**
 * @date 2023/06/07
 * @description React Query Provider(全局使用)
 */
const AppProviders = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/*<AuthProvider>{children}</AuthProvider>*/}
      {children}
      <ReactQueryDevtools initialIsOpen position="bottom-right" />
    </QueryClientProvider>
  );
};

export { AppProviders };
