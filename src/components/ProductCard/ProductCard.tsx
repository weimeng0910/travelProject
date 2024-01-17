import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Container, Heartbeat, RoundBox } from './ProductCard.module';
import { IGoods } from '@/types/goods';
import { Icon } from '@/common/hooks/Icon';
import { CarouselMoney } from '@/components/Swiper/SwiperPage.module';

/*
 * @Date: 2023-10-13 09:29:37
 * @Description: ProductCard
 */

export const ProductCard: FC<{ goodsData: Partial<IGoods>[] }> = ({ goodsData }) => {
  return (
    <>
      <Container>
        {goodsData.map((item, index) => {
          if (item.is_hot) {
            return (
              <div key={index}>
                <ul>
                  <li>
                    <Link to={`/detail/${String(item.id)}`}>
                      <img src={item.pic_url!} />
                    </Link>
                  </li>
                  <li>
                    <h2>{item.name}</h2>
                    <h3>
                      <RoundBox />
                      <RoundBox />
                      <RoundBox />

                      {item.Kommentar}
                    </h3>
                    <h4>
                      ${item.counter_price}
                      <CarouselMoney>/day</CarouselMoney>
                    </h4>
                  </li>
                  <li>
                    <Heartbeat visible={item.is_heartbeat!}>
                      <Icon
                        id={'Icon'}
                        type="HeartFill"
                        style={{ width: 'clamp(8px, 2vw, 20px)' }}
                      />
                    </Heartbeat>
                  </li>
                </ul>
                <Link to={`/detail?name=${item.id}`}>
                  <span>view</span>
                </Link>
              </div>
            );
          }
        })}
      </Container>
    </>
  );
};
