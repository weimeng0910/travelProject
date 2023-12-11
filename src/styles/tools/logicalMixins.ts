import { css } from 'styled-components';
import { checkFlexGapSupported } from './checkFlexGapSupported'


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
  font-family: ${family || "Arial"};
  font-weight:${fontWeight || "normal"};
`;
/* box-shadow
----------------------- */

export const BaseShadow = (value: string) => `
  box-shadow: ${value};
`;

/* font-size
----------------------- */
interface IVw {
  size?: number;
  base?: number;
}
export const vw = ({ size, base = 750 }: IVw) => `
  font-size: ${size}px;
  font-size: calc(${size! / base} * 100vw);
`;
interface IEm {
  size?: number;
  base?: number;
}


export const Em = ({ size, base = 16 }: IEm) => `
 font-size:${size! / base}em;
`

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
/* width and height
----------------------- */
interface IWH {
  all?: string | number;
  width?: string | number;
  height?: string | number;

}
export const WH = ({
  all = '',
  width = all,
  height = all,

}: IWH) => css`
 width: ${width};
 height:${height};
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
/* Center
----------------------- */
interface ICenter {
  position?: string,

  left?: string | number;
  top?: string | number;
  transform?: string
}
export const Center = ({
  position = 'absolute',
  top = '50%',
  left = '50%',
  transform = 'translate(-50%, -50%)'
}: ICenter) => css`
 position: ${position};
 top:${top};
 left:${left};
 transform: ${transform};

`;
/* GridBox
----------------------- */
interface IGridBox {
  display?: string,
  gridTemplateColumns?: string,
  gridTemplateRows?: string,
  gridColumnGap?: string,
  gridRowGap?: string
}

export const GridBox = ({
  display = "grid",
  gridTemplateColumns = "1fr 1fr 1fr",
  gridColumnGap = ".5vw",



}: IGridBox) => css`
  display: ${display};
  grid-template-columns: ${gridTemplateColumns};
  grid-column-gap: ${gridColumnGap};

`;

/* FlexBox
----------------------- */
interface IFlexBox {
  display?: string,
  direction?: string,
  spacing?: string,
  alignment?: string,
  flexWrap?: string,
  alignContent?: string
}
export const FlexBox = ({
  display = 'flex',
  direction = 'row',
  spacing = 'center',
  alignment = 'center',
  flexWrap,
  alignContent
}: IFlexBox) => css`

  display: ${display};
  /* flex-direction 属性指定了弹性子元素在父容器中的位置。 */
  flex-direction:${direction};
  /* 内容对齐（justify-content）
  属性应用在弹性容器上，把弹性项沿着弹性容器的主轴线（main axis）对齐。 */
  justify-content:${spacing};
  /* align-items 设置或检索弹性盒子元素在侧轴（纵轴）方向上的对齐方式。 */
  align-items: ${alignment};
  flex-wrap: ${flexWrap};
  /* align-content 适用于多行（换行）的情况，单行无效 */
  align-content:${alignContent};
`;
/* Ellipsis
----------------------- */
interface IEllipsis {
  display?: string,
  overflow?: string,
  webkitBoxOrient?: string,
  webkitLinCclamp?: string,
  textOverflow?: string
}

export const Ellipsis = ({
  display = "-webkit-box",
  overflow = "hidden",
  webkitBoxOrient = "vertical",
  webkitLinCclamp = "1",
  textOverflow = "ellipsis"
}: IEllipsis) => css`
   display: ${display};
   overflow: ${overflow};
   text-overflow:${textOverflow};
   -webkit-box-orient:${webkitBoxOrient};
   -webkit-line-clamp:${webkitLinCclamp};
`;

/* flexGapPolyfill
----------------------- */
export const flexGapPolyfill = (gap: string) => {
  return css`
    margin-left: -${gap};
    margin-top: -${gap};

    & > * {
      margin-left: ${gap};
      margin-top: ${gap};
    }
  `;
};

export const flexGap = (gap: string) => {
  if (checkFlexGapSupported()) {
    return css`
      gap: ${gap};
    `;
  }

  return flexGapPolyfill(gap);
};
/* Absolute
----------------------- */
interface IAbsolute {
  position?: string,
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
}
export const Absolute = ({
  position = 'absolute',
  top = 'auto',
  right = 'auto',
  bottom = 'auto',
  left = 'auto'
}: IAbsolute) => css`
  position: ${position};
  top: ${top};;
  right:${right};;
  bottom:${bottom};;
  left:${left};
  `;
/*Transition
----------------------- */
interface ITransition {
  properties?: string,
  type?: string;
  time?: string;

}
export const Transition = ({
  properties,
  type = "linear",
  time = "0.25s"
}: ITransition) => css`
    transition: ${time} ${type};
    /* transition-property 指定应用过渡属性的名称 */
    transition-property: ${properties};
    will-change: ${properties};
  `;

/*DisabledStyle
----------------------- */

interface IDisabledStyle {
  disabled?: boolean,
}
export const DisabledStyle = ({ disabled = false }: IDisabledStyle) => css`
    /* opacity 属性指定了一个元素的不透明度 */
    opacity: ${disabled ? 0.6 : ""};
    /* 鼠标 */
    cursor: ${disabled && `default`};
  `;
/* Button
----------------------- */
interface IButtonStyle {
  border?: string,
  color?: string,
  backgroundColor?: string,
  padding?: string,
  fontSize?: string,
  cursor?: string,
  display?: string,
  hoverBackgroundColor?: string,
  hoverColor?: string
}
export const Buttons = ({
  border = 'none',
  color,
  backgroundColor = '#16A085',
  padding,
  fontSize = '22px',
  cursor = 'pointer',
  display = 'inline - block',
  hoverBackgroundColor,
  hoverColor,
}: IButtonStyle) => css`
  border: ${border};
  color: ${color};
  background-color:  ${backgroundColor};
  padding: ${padding};
  font-size:  ${fontSize};
  cursor:  ${cursor};
  display:  ${display};
  &:hover {
    color:  ${hoverColor};
    background-color: ${hoverBackgroundColor};
  }
  &:active {
    background: ${hoverBackgroundColor};
}
`
/*Iput
----------------------------------------------------- */

export const inputPlaceholder = (css: string) => {
  return (`
        &.placeholder { ${css} }
        &:-moz-placeholder { ${css} }
        &::-moz-placeholder { ${css} }
        &:-ms-input-placeholder { ${css} }
        &::-webkit-input-placeholder { ${css} }
    `);
}
/*background-color
----------------------------------------------------- */
interface Colors {
  color?: string;
  hover?: string;
}
export const bgMixin = (color: Colors) => css`
  background-color: ${color.color};
  &:hover {
    background-color: ${color.hover};
  }
`;
export default {
  Font,
  Border,
  BorderRadius,
  Margin,
  Padding,
  Position,
  Size,
  Ellipsis,
  BaseShadow
};