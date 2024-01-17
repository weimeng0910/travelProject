/*
 * @Date: 2024-01-16 10:49:38
 * @Description: AdvertisingBanner
 */
import { FC } from 'react';
import Icontemp from '@/assets/icon/icon_temp01.png';
import {
  Container,
  ProductIntroContainer,
  PrimaryButton,
  PlaneBgStyle,
} from './AdvertisingBanner.module';
export const AdvertisingBanner: FC = () => {
  return (
    <Container>
      <ProductIntroContainer>
        <div>
          <h1>Keep on planning</h1>
          <h2>What to do, where to eat & more trip inspo.</h2>
          <PrimaryButton>See more</PrimaryButton>
          <PlaneBgStyle />
        </div>
        <div>
          <h1>Find your journey</h1>
          <div>
            <img src={Icontemp} />
          </div>
        </div>
      </ProductIntroContainer>
    </Container>
  );
};
