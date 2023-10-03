/**
 * @date 2023/06/13
 * @description CSS Public Variable
 */

/* Color
----------------------- */
export const Color = {
  colorPamary: `#16A085`,
  colorWhite: `#ffffff`,
  colorBlack: `#000`,
};

export const FontColor = {
  colorFontPrimary: `#16A085`,
  colorFontWhite: `#fff`,
  colorFontBlack: `#000`,
  colorFontGrey: `#7f8c8d`,
};

/* Font
----------------------- */
interface IVw {
  size?: number;
  base?: number;
}
const vw = ({ size, base = 750 }: IVw) => `
  font-size: ${size}px;
  font-size: calc(${size! / base} * 100vw);
`;
export const FontSizes = {
  sizeJ: vw({ size: 8 }),
  sizeK: vw({ size: 10 }),
  sizeS: vw({ size: 12 }),
  sizeM: vw({ size: 14 }),
  sizeL: vw({ size: 16 }),
  sizeXL: vw({ size: 18 }),
  sizeXXL: vw({ size: 20 }),
  sizeXXXL: vw({ size: 30 }),
};

/* Background
----------------------- */
export const BackgroundColor = {
  backgroundColorprimary: Color.colorPamary,
  backgroundColorSecondary: `#F5FAF8 `,
  backgroundColorTertiary: `#F5F6FA `,
  backgroundColorFourth: `#FFF `,
  backgroundColorGrey: `#7f8c8d `,
};
/* Border
----------------------- */
export const BorderBase = {
  borderPrimary: `solid 5px #16a085`,
  borderSecondary: `solid 1px #16a085 `,
  borderTertiary: `solid 1px #fff `,
  borderFourth: `solid 1px #7f8c8d  `,
};
/// borderRadius|1|Radius|0
export const BorderRadiusBase = {
  bordeRadiusBase: `1.6vw `,

  borderRadiusSmall: `0.5vw `,

  borderRadiusCircle: `50% `,

  borderRadiusZero: `0`,
};

/* Box-shadow
----------------------- */
export const BaseBoxShadow = {
  boxShadowBase: ` 0 0.31vw 0.31vw rgba(0, 0, 0, 0.2)`,
  boxShadowDark: `0 .5rem .5rem 0  gray `,
  boxShadowLight: ` 0 0.13vw 0.98vw rgba(0, 0, 0, 0.1) `,
};

/* z-index
-------------------------- */
export const ZIndex = {
  indexNormal: `1 !default`,
  indexTop: `1000 !default`,
  indexPopper: `2000 !default`,
};
