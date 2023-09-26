import React from 'react';
import styled, { css } from 'styled-components';
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
interface IRem {
  size?: number;
  base?: number;
}
export const rem = ({ size, base = 16 }: IRem) => `
  font-size: ${size}px;
  font-size: calc(${size! / base} * 1rem);
`;
export const FontSizes = {
  sizeS: rem({ size: 14 }),
  sizeM: rem({ size: 16 }),
  sizeL: rem({ size: 18 }),
  sizeXL: rem({ size: 20 }),
  sizeXXL: rem({ size: 30 }),
  sizeXXXL: rem({ size: 40 }),
};

/* Background
----------------------- */
export const BackgroundColor = {
  backgroundColorprimary: Color.colorPamary,
  backgroundColorSecondary: `#F5FAF8 `,
  backgroundColorTertiary: `#F5F6FA `,
  backgroundColorFourth: `#FFF `,
};
/* Border
----------------------- */
export const BorderBase = {
  borderPrimary: `solid 5px #16a085`,
  borderSecondary: `solid 1px #16a085 `,
  borderTertiary: `solid 1px #fff `,
  borderFourty: `solid 2px #118060  `,
};
/// borderRadius|1|Radius|0
export const BorderRadiusBase = {
  bordeRadiusBase: `1.5625rem `,

  borderRadiusSmall: `.5rem `,

  borderRadiusCircle: `50% `,

  borderRadiusZero: `0`,
};

/* Box-shadow
----------------------- */
export const BaseBoxShadow = {
  boxShadowBase: ` 0 .3125rem .3125rem rgba(0, 0, 0, 0.2)`,
  boxShadowDark: `0 .5rem .5rem 0  gray `,
  boxShadowLight: ` 0 2px 12px 0 rgba(0, 0, 0, 0.1) `,
};

/* z-index
-------------------------- */
export const ZIndex = {
  indexNormal: `1 !default`,
  indexTop: `1000 !default`,
  indexPopper: `2000 !default`,
};
