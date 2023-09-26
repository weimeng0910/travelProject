import styled, { css } from 'styled-components';
import { BorderRadius, Margin, Padding } from '@/styles/tools/logicalMixins';
import { BorderRadiusBase, Color, BackgroundColor, BaseBoxShadow } from '@/styles/settings/var';

/* ReuseContainer
----------------------- */
export const ReuseContainer = styled.div`
  margin: 1vw;
  border: 2px solid black;
  font-size: 1.5vw;
  ${BorderRadius({ all: BorderRadiusBase.bordeRadiusBase })}
  background-color:${BackgroundColor.backgroundColorSecondary}
`;
