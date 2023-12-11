/*
 * @Date: 2023-09-04 18:36:34
 * @Description: ProductCollection
 */
import { FC } from 'react';
import { IHotGoods } from '@/types/goods';
import { HeartTwoTone } from '@ant-design/icons';
import { Container, HotGoodsBox, ProductBox, Buttondisplay, Heartbeat } from './product.module';

export const ProductCollection: FC<{ hotGoodsData: IHotGoods[] }> = ({ hotGoodsData }) => {
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
                <Heartbeat>
                  <HeartTwoTone rev={undefined} />
                </Heartbeat>
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
