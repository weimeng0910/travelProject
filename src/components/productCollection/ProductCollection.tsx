/*
 * @Date: 2023-09-04 18:36:34
 * @Description: ProductCollection
 */
import { FC } from 'react';
import { HeartTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import { IHotGoods } from '@/types/goods';
import { Container, HotGoodsBox, ProductBox, Buttondisplay, Heartbeat } from './product.module';

export const ProductCollection: FC<{ hotGoodsData: IHotGoods[] }> = ({ hotGoodsData }) => {
  console.log(hotGoodsData);

  return (
    <Container>
      <HotGoodsBox>
        {hotGoodsData.map((item, _index) => {
          if (item.is_hot) {
            return (
              <ProductBox key={item.id}>
                <div>
                  <Link to={`/detail/${String(item.id)}`}>
                    <img src={item.pic_url} />
                  </Link>
                </div>
                <Heartbeat>
                  <HeartTwoTone rev={undefined} />
                </Heartbeat>
                <div>
                  <ul>
                    <li>{item.name}</li>
                    <li>from $ {item.retail_price} per adult</li>
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
