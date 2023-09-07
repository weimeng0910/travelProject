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
export const FontSizes = {
  sizeS: `14px`,
  sizeM: `16px`,
  sizeL: `18px`,
};

/* Background
----------------------- */
export const BackgroundColor = {
  backgroundColorprimary: Color.colorPamary,
  backgroundColorSecondary: `#F5FAF8 `,
  backgroundColorTertiary: `#F5F6FA `,
};
/* Border
----------------------- */
//export const Border = {
//  borderWidthBase: `1Px !default`,
//  borderStyleBase: `solid !default`,
//  borderColorBase: `#16A085`,
//};
interface BorderProps {
  borderWidthBase: string;
  borderStyleBase: string;
  borderColorBase: string;
}

export default {
  borderBase: ({ borderWidthBase, borderStyleBase, borderColorBase }: BorderProps) => css`
    border-style: ${borderWidthBase} ${borderStyleBase} ${borderColorBase};
  `,
  //
};
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
  border-block-end: ${bottom};
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
