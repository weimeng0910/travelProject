/*
 * @Date: 2023-06-13 14:21:30
 * @Description: DetailPage
 */
import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  ProductIntroContainer,
  PrimaryButton,
  PlaneBgStyle,
  ProductDetailBox,
} from './DatailPage.module';
import { SearchPanel } from '@/components/serchPanel';
import Icontemp from '@/assets/icon/icon_temp01.png';
type MatchParams = {
  touristRouteId: string;
};

export const DetailPage: React.FC = () => {
  const { touristRouteId } = useParams<MatchParams>();
  console.log(touristRouteId, 'useparams001');

  return (
    <Container>
      <div>
        <SearchPanel />
      </div>
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
      <ProductDetailBox>
        <div>
          <h1>Rovaniemi Northern Lights Photography Small-Group Tour</h1>
          <h2>By Beyond Arctic</h2>
          <div>
            <span>220 reviews</span>
            <span>Recommended by 93% of travelers</span>
          </div>
        </div>
        <div>
          <div>1</div>
          <div>2</div>
        </div>
        <div>5</div>
      </ProductDetailBox>
    </Container>
  );
};
