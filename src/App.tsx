import { GlobalStyles } from '@/styles/base/global-styles'; //引入全局样式
import { AuthenticatedAPP } from '@/authenticatedApp';
//错误边界
import { ErrorBoundary } from '@/components/errorBoundary';
import { FullPageErrorFallback } from '@/components/lib';
//import { useEffect } from 'react';

//const setRem = async () => {
//  await require('lib-flexible');
//};
//useEffect(() => {
//  setRem();
//  window.addEventListener('resize', setRem);
//});
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
