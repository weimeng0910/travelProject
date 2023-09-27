import React from 'react';
import { IHotGoods } from '@/types/goods';
import { HeartTwoTone } from '@ant-design/icons';
import {
  Container,
  TitleBox,
  TripText,
  DescribeText,
  MoreText,
  HotGoodsBox,
  ImgBox,
  HotGoodsImg,
  HotGoodsWord,
  Hot,
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
              <ImgBox key={item.id}>
                <HotGoodsImg>
                  <Img src={item.picUrl} />
                </HotGoodsImg>
                <Hot>
                  <HeartTwoTone twoToneColor="#fff" rev={undefined} />
                </Hot>
                <HotGoodsWord>
                  <ul>
                    <li>{item.name}</li>
                    <li>{item.counterPrice}</li>
                    <li>{item.retailPrice}￥</li>
                  </ul>
                </HotGoodsWord>
              </ImgBox>
            );
          }
        })}
      </HotGoodsBox>
    </Container>
  );
};
