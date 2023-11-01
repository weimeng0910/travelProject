/*
 * @Date: 2023-06-21 20:33:02
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-30 16:41:58
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