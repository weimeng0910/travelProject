/*
 * @Date: 2023-06-21 20:33:02
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-12-08 12:31:15
 * @FilePath: /travelProject/src/styles/tools/media.ts
 * @Description: useMediaQuery hook
 */


const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  bigdesktop: customMediaQuery(1440),
  desktop: customMediaQuery(1024),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576)
};
export default media;