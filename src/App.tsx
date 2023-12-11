/*
 * @Date: 2023-09-08 14:47:42
 * @Description: Do not edit
 */
import { GlobalStyles } from '@/styles/base/global-styles'; //global style
import { AuthenticatedAPP } from '@/authenticatedApp';
//Error Boundary
import { ErrorBoundary } from '@/common/hooks/errorBoundary';
import { FullPageErrorFallback } from '@/common/hooks/lib';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <AuthenticatedAPP visible={false} />
      </ErrorBoundary>
    </>
  );
};

export default App;
