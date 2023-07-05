import { GlobalStyles } from '@/styles/global-styles'; //引入全局样式
import { AuthenticatedAPP } from '@/authenticatedApp';
//错误边界
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
