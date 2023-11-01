import { GlobalStyles } from '@/styles/base/global-styles'; //global style
import { AuthenticatedAPP } from '@/authenticatedApp';
//Error Boundary
import { ErrorBoundary } from '@/components/errorBoundary';
import { FullPageErrorFallback } from '@/components/lib';

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
