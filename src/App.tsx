import { GlobalStyles } from '@/styles/global-styles'; //引入全局样式
import { AuthenticatedAPP } from '@/authenticated-app';
//错误边界
import { ErrorBoundary } from '@/components/error-boundary';
import { FullPageErrorFallback } from '@/components/lib';
const App = () => {
  return (
    <>
      <GlobalStyles />
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <AuthenticatedAPP />
      </ErrorBoundary>
    </>
  );
};

export default App;
