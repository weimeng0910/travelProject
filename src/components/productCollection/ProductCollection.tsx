/*
 * @Date: 2023-09-04 18:36:34
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-10-18 12:08:07
 * @FilePath: /travelProject/src/components/productCollection/ProductCollection.tsx
 * @Description: ProductCollection
 */
import React from 'react';
import { IHotGoods } from '@/types/goods';
import {
  Container,
  TitleBox,
  TripText,
  DescribeText,
  MoreText,
  HotGoodsBox,
  ProductBox,
  HotGoodsImg,
  HotGoodsWord,
  Hot,
  Heart,
  Buttondisplay,
  Img,
  HotGoodsSpan,
} from './product.module';
/**
 * ProductCollection
 */

export const ProductCollection: React.FC<{ hotGoodsData: IHotGoods[] }> = ({ hotGoodsData }) => {
  return (
    <Container>
      <TitleBox>
        <TripText>The Hottest Trip</TripText>
        <DescribeText>
          The most popular and recommended Destination, bring family now Let's go together and enjoy
          the holiday.
        </DescribeText>
        <MoreText>more</MoreText>
      </TitleBox>
      <HotGoodsBox>
        {hotGoodsData.map((item, _index) => {
          if (item.isHot) {
            return (
              <ProductBox key={item.id}>
                <HotGoodsImg>
                  <Img src={item.picUrl} />
                </HotGoodsImg>
                <Hot>
                  <Heart rev={undefined} />
                </Hot>
                <HotGoodsWord id="HotGoodsWord">
                  <ul>
                    <li>{item.name}</li>

                    <li>from $ {item.retailPrice} per adult</li>
                    <li>
                      <Buttondisplay>See more</Buttondisplay>
                      <Buttondisplay>Add to Cart</Buttondisplay>
                    </li>
                  </ul>
                  <HotGoodsSpan id="Hotspan">view</HotGoodsSpan>
                </HotGoodsWord>
              </ProductBox>
            );
          }
        })}
      </HotGoodsBox>
    </Container>
  );
};
