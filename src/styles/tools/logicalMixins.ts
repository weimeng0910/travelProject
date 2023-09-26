import { css } from 'styled-components';

/* font
----------------------- */
interface IFontProps {
  color?: string;
  size?: string;
  family?: string;
  fontWeight?: string

}
export const Font = ({ color, size, family, fontWeight }: IFontProps) => `
  color: ${color || "#16A085"};
  font-size: ${size || "1rem"};
  font-family: ${family || "Lorem Ipsum"};
  font-weight:${fontWeight || "normal"};
`;
/* box-shadow
----------------------- */

export const BaseShadow = (value: string) => `
  box-shadow: ${value};
`;
//export const baseShadow = css`
//  box-shadow: ${(props: IBoxShadow) => `0 10px 6px -6px ${props.color || "red"}`};
//`;

interface IRem {
  size?: number;
  base?: number;
}
export const rem = ({ size, base = 16 }: IRem) => `
  font-size: ${size}px;
  font-size: calc(${size! / base} * 1rem);
`;

/* Border
----------------------- */

interface IProps {
  all?: string;
  bottom?: string;
  left?: string;
  right?: string;
  top?: string;
  x?: string;
  y?: string;
}

export const Border = ({
  all,
  x = all,
  y = all,
  bottom = y,
  left = x,
  right = x,
  top = y,
}: IProps) => css`
  border-block-end: ${bottom} ;
  border-block-start: ${top};
  border-inline-end: ${right};
  border-inline-start: ${left};
  @supports not (border-block-end: 1px solid #000) {
    border-bottom: ${bottom};
    border-left: ${left};
    border-right: ${right};
    border-top: ${top};
  }
`;

interface IBorderRadius {
  all?: string;
  bottomLeft?: string;
  bottomRight?: string;
  topLeft?: string;
  topRight?: string;
}

export const BorderRadius = ({
  all,
  bottomLeft = all,
  bottomRight = all,
  topLeft = all,
  topRight = all,
}: IBorderRadius) => css`
  border-end-end-radius: ${bottomRight};
  border-end-start-radius: ${bottomLeft};
  border-start-end-radius: ${topRight};
  border-start-start-radius: ${topLeft};
  @supports not (border-end-end-radius: 1px) {
    border-bottom-left-radius: ${bottomLeft};
    border-bottom-right-radius: ${bottomRight};
    border-top-left-radius: ${topLeft};
    border-top-right-radius: ${topRight};
  }
`;
interface BorderProps {
  borderWidthBase: string;
  borderStyleBase: string;
  borderColorBase: string;
}
export const borderBase = ({ borderWidthBase, borderStyleBase, borderColorBase }: BorderProps) => css`
    border-style: ${borderWidthBase} ${borderStyleBase} ${borderColorBase};
  `;
/* Margin
----------------------- */
export const Margin = ({
  all,
  x = all,
  y = all,
  bottom = y,
  left = x,
  right = x,
  top = y,
}: IProps) => css`
  margin-block-end: ${bottom};
  margin-block-start: ${top};
  margin-inline-end: ${right};
  margin-inline-start: ${left};
  @supports not (margin-block-end: 1rem) {
    margin-bottom: ${bottom};
    margin-left: ${left};
    margin-right: ${right};
    margin-top: ${top};
  }
`;
/* padding
----------------------- */
export const Padding = ({
  all,
  x = all,
  y = all,
  bottom = y,
  left = x,
  right = x,
  top = y,
}: IProps) => css`
  padding-block-end: ${bottom};
  padding-block-start: ${top};
  padding-inline-end: ${right};
  padding-inline-start: ${left};
  @supports not (padding-block-end: 1rem) {
    padding-bottom: ${bottom};
    padding-left: ${left};
    padding-right: ${right};
    padding-top: ${top};
  }
`;
/* Position
----------------------- */
interface IPosition {
  bottom?: string | number;
  left?: string | number;
  right?: string | number;
  top?: string | number;
}

export const Position = ({ top, right, bottom, left }: IPosition) => css`
  inset-block-end: ${bottom};
  inset-block-start: ${top};
  inset-inline-end: ${right};
  inset-inline-start: ${left};
  @supports not (inset-block-end: ${bottom}) {
    bottom: ${bottom};
  }
  @supports not (inset-block-start: ${top}) {
    top: ${top};
  }
  @supports not (inset-block: ${top}) {
    bottom: ${bottom};
    top: ${top};
  }
  @supports not (inset-inline-end: ${left}) {
    left: ${left};
  }
  @supports not (inset-inline-end: ${right}) {
    right: ${right};
  }
  @supports not (inset-inline: ${left}) {
    left: ${left};
    right: ${right};
  }
`;
/* Size
----------------------- */
interface ISize {
  height?: string;
  maxHeight?: string;
  maxWidth?: string;
  minHeight?: string;
  minWidth?: string;
  width?: string;
}

export const Size = ({
  height,
  maxHeight,
  maxWidth,
  minHeight,
  minWidth,
  width,
}: ISize) => css`
  block-size: ${height};
  inline-size: ${width};
  max-block-size: ${maxHeight};
  max-inline-size: ${maxWidth};
  min-block-size: ${minHeight};
  min-inline-size: ${minWidth};
  /* @supports CSS at-rule 你可以指定依赖于浏览器中的一个或多个特定的 CSS 功能的支持声明。
   *  这被称为特性查询。该规则可以放在代码的顶层，也可以嵌套在任何其他条件组规则中。
   *  用于检测浏览器是否支持css的某个属性，其实就是条件判断
   */
  @supports not (block-size: 1rem) {
    height: ${height};
    max-height: ${maxHeight};
    min-height: ${minHeight};
  }
  @supports not (inline-size: 1rem) {
    max-width: ${maxWidth};
    min-width: ${minWidth};
    width: ${width};
  }
`;
/* GridBox
----------------------- */
interface IGridBox {
  display?: string,
  gridTemplateColumns?: string,
  gridColumnGap?: string
}

export const gridBox = ({
  display = "grid",
  gridTemplateColumns = "1fr 1fr 1fr",
  gridColumnGap = ".5vw"
}: IGridBox) => css`
  display: ${display};
  grid-template-columns: ${gridTemplateColumns};
  grid-column-gap: ${gridColumnGap};
`;


export default {
  Font,
  Border,
  BorderRadius,
  Margin,
  Padding,
  Position,
  Size,
  BaseShadow
};