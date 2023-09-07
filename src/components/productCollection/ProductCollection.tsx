import React from 'react';
import { HotGoods } from '@/types/goods';
import { HeartTwoTone } from '@ant-design/icons';
import {
  Container,
  TitleBox,
  WorldText,
  DescribeText,
  HotGoodsBox,
  ImgBox,
  HotGoodsImg,
  HotGoodsWord,
  Hot,
  Img,
} from './roductCollection.module';
/**
 * @date 2023/09/04
 * @description ProductCollection
 */
interface PropTypes {
  hotGoodsData: HotGoods[];
}

export const ProductCollection: React.FC<{ hotGoodsData: HotGoods[] }> = ({ hotGoodsData }) => {
  console.log(hotGoodsData, '001');

  return (
    <Container>
      <TitleBox>
        <WorldText>The Hottest Trip</WorldText>
        <DescribeText>
          The most popular and recommended Destination, bring family now Let's go together and enjoy
          the holiday.
        </DescribeText>
        <DescribeText>more</DescribeText>
      </TitleBox>
      <HotGoodsBox>
        {hotGoodsData.map((item, index) => {
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
