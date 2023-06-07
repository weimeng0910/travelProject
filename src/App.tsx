import { GlobalStyles } from '@/styles/global-styles'; //引入全局样式
import { Homepage } from '@/pages/Home';
//错误边界
import { ErrorBoundary } from '@/components/error-boundary';
import { FullPageErrorFallback } from '@/components/lib';
const App = () => {
  return (
    <>
      <GlobalStyles />
      <ErrorBoundary fallbackRender={FullPageErrorFallback}>
        <Homepage />
      </ErrorBoundary>
    </>
  );
};

export default App;
