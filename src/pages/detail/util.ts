/*
 * @Date: 2023-12-14 16:23:35
 * @Description: useProductParams
 */
//import { useMemo } from "react";
//import { useUrlQueryParam } from '@/common/hooks/useUrlQueryParam';
//export const useProductParams = () => {
//  const [param, setParam] = useUrlQueryParam(["touristRouteId"]);
//  console.log(param, '001');

//  return [
//    useMemo(
//      () => ({ ...param, touristRouteId: Number(param.touristRouteId) || undefined }),
//      [param]
//    ),
//    setParam,
//  ] as const;
//};