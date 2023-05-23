import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';
import Rooter from '@/router/router';
import Invoices from '@/pages/invoices';
import Invoice from '@/pages/invoice';
import Expenses from '@/pages/expenses';
import ErrorPage from '@/router/Error';
//使用对象形式
//const router = createBrowserRouter([
//  //1.路由嵌套
//  {
//    path: '/', //根路由
//    element: <Rooter />,
//    errorElement: <ErrorPage />,
//    //子路由
//    children: [
//      {
//        path: '/invoices',
//        element: <Invoices />,
//      },
//      {
//        path: '/expenses',
//        element: <Expenses />,
//      },
//    ],
//  },
//]);
//使用传统jsx的形式
const router = createBrowserRouter(
  createRoutesFromElements(
    //根路由
    <Route path="/" element={<Rooter />}>
      {/*嵌套路由*/}
      <Route path="invoices" element={<Invoices />}>
        {/*三级路由，url传参*/}
        <Route path=":invoiceId" element={<Invoice />} />
        {/* 索引路由，父路由的默认路由，子路由的所有路径都不匹配时 */}
        <Route
          index
          element={
            <main>
              <h2>您还没有选择内容</h2>
            </main>
          }
        />
      </Route>
      <Route path="expenses" element={<Expenses />} />
      {/*无路径处理路由*/}
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function Root() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Root;
