/*
 * @Date: 2023-09-04 18:36:34
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-02 10:49:34
 * @FilePath: /travelProject/src/components/productCollection/ProductCollection.tsx
 * @Description: ProductCollection
 */
import React from 'react';
import { IHotGoods } from '@/types/goods';
import { HeartTwoTone } from '@ant-design/icons';
import { Container, HotGoodsBox, ProductBox, Buttondisplay } from './product.module';
/**
 * ProductCollection
 */

export const ProductCollection: React.FC<{ hotGoodsData: IHotGoods[] }> = ({ hotGoodsData }) => {
  return (
    <Container>
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
