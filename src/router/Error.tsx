//import { useRouteError } from 'react-router-dom';
//type ErrorResponse = {
//  data: any;
//  status: number;
//  statusText: string;
//  message?: string;
//};
//const errorCheck = (error: any): error is ErrorResponse => {
//  return 'data' in error && 'status' in error && 'statusText' in error;
//};
//const ErrorPage: React.FC = () => {
//  const error: any = useRouteError();
//  console.error(error);
//  if (errorCheck(error)) {
//    return (
//      <div id="error-page">
//        <h1>错误页面</h1>
//        <p>发生了一个路径错误</p>
//        <p>
//          <i>{error.statusText || error.message}</i>
//        </p>
//      </div>
//    );
//  } else {
//    return <></>;
//  }
//};
//export default ErrorPage;
const ErrorPage: React.FC = () => {
  return (
    <div id="error-page">
      <h1>错误页面</h1>
      <p>发生了一个路径错误</p>
    </div>
  );
};
export default ErrorPage;
