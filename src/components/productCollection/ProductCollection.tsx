/*
 * @Date: 2023-09-04 18:36:34
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-01 16:54:36
 * @FilePath: /travelProject/src/components/productCollection/ProductCollection.tsx
 * @Description: ProductCollection
 */
import React from 'react';
import { IHotGoods } from '@/types/goods';
import { HeartTwoTone } from '@ant-design/icons';
import { Container, TitleBox, HotGoodsBox, ProductBox, Buttondisplay } from './product.module';
/**
 * ProductCollection
 */

export const ProductCollection: React.FC<{ hotGoodsData: IHotGoods[] }> = ({ hotGoodsData }) => {
  return (
    <Container>
      <TitleBox>
        <div>The Hottest Trip</div>
        <div>
          The most popular and recommended Destination, bring family now Let's go together and enjoy
          the holiday.
        </div>
        <div>more</div>
      </TitleBox>
      <HotGoodsBox>
        {hotGoodsData.map((item, _index) => {
          if (item.isHot) {
            return (
              <ProductBox key={item.id}>
                <div>
                  <img src={item.picUrl} />
                </div>
                <div>
                  <HeartTwoTone rev={undefined} />
                </div>
                <div>
                  <ul>
                    <li>{item.name}</li>
                    <li>from $ {item.retailPrice} per adult</li>
                    <li>
                      <Buttondisplay>See more</Buttondisplay>
                      <Buttondisplay>To Cart</Buttondisplay>
                    </li>
                  </ul>
                  <span>view</span>
                </div>
              </ProductBox>
            );
          }
        })}
      </HotGoodsBox>
    </Container>
  );
};
