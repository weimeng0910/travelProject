/*
 * @Date: 2023-09-12 12:11:40
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-06 11:42:24
 * @FilePath: /travelProject/src/styles/settings/var.tsx
 * @Description: CSS Public Variable
 */
import { px2vw } from '@/utils';

/* Color
----------------------- */
export const Color = {
  colorPamary: `#16A085`,
  colorWhite: `#ffffff`,
  colorBlack: `#000`,
  colorLightGreen: `#00AA6C`,
  maniColor: `#444`,
};

export const FontColor = {
  colorFontPrimary: `#16A085`,
  colorFontWhite: `#fff`,
  colorFontBlack: `#000`,
  colorFontGrey: `#7f8c8d`,
};

/* Font
----------------------- */
interface IEm {
  size?: number;
  base?: number;
}
const Em = ({ size, base = 16 }: IEm) => `
  font-size: ${size}px;
  font-size: ${size! / base}em;
`;
export const FontSizes = {
  sizeJ: Em({ size: 8 }),
  sizeK: Em({ size: 10 }),
  sizeS: Em({ size: 12 }),
  sizeM: Em({ size: 14 }),
  sizeL: Em({ size: 16 }),
  sizeXL: Em({ size: 18 }),
  sizeXXL: Em({ size: 20 }),
  sizeXXXL: Em({ size: 30 }),
};
/* Size
-------------------------- */
export const SizeBase = `${px2vw(14)}`;
/* Background
----------------------- */
export const BackgroundColor = {
  backgroundColorprimary: Color.colorPamary,
  backgroundColorSecondary: `#F5FAF8 `,
  backgroundColorTertiary: `#F5F6FA `,
  backgroundColorFourth: `#FFF `,
  backgroundColorGrey: `#7f8c8d `,
  backgroundColorLightGrey: `#FAFAFA `,
  backgroundColorFifrtary: `#F5FAF8`,
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
  bordeRadiusBase: `20px `,

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

/* Hide elements from all users.
-------------------------------- */
export const a11yHidden = {
  display: `none`,
};

/* Display inline block cross browser
-------------------------------------*/
export const inlineBlock = {
  display: `block`,
};
