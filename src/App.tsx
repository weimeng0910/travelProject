/*
 * @Date: 2023-09-08 14:47:42
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-15 09:44:58
 * @FilePath: /travelProject/src/App.tsx
 * @Description: Do not edit
 */
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
