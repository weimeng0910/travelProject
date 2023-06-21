import { css, CSSObject } from 'styled-components/macro'

/**
 * @date 2023/05/30
 * @description useMediaQuery hook
 */
//常用断点类型设置
const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  desktop: customMediaQuery(922),
  tablet: customMediaQuery(768),
  phone: customMediaQuery(576)
};
export default media;