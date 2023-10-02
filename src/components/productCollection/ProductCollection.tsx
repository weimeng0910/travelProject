import React from 'react';
import { IHotGoods } from '@/types/goods';
import { Button } from 'antd';
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
} from './product.module';
/**
 * @date 2023/09/04
 * @description ProductCollection
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
                <HotGoodsWord>
                  <ul>
                    <li>{item.name}</li>

                    <li>from $ {item.retailPrice} per adult</li>
                    <li>
                      <Buttondisplay>See more</Buttondisplay>
                      <Buttondisplay>Add to Cart</Buttondisplay>
                    </li>
                  </ul>
                </HotGoodsWord>
              </ProductBox>
            );
          }
        })}
      </HotGoodsBox>
    </Container>
  );
};
