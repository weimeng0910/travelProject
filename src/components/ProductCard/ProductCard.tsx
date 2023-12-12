import { FC, useState } from 'react';
import { Container, Heartbeat, RoundBox } from './ProductCard.module';
import { IGoods } from '@/types/goods';
import { Icon } from '@/common/hooks/Icon';
import { CarouselMoney } from '@/components/Swiper/SwiperPage.module';

/*
 * @Date: 2023-10-13 09:29:37
 * @Description: ProductCard
 */

export const ProductCard: FC<{ goodsData: Partial<IGoods>[] }> = ({ goodsData }) => {
  console.log(goodsData, '006');

  const [visible, setVisible] = useState(false);
  return (
    <>
      <Container>
        {goodsData.map((item, index) => {
          return (
            <div key={index}>
              <ul>
                <li>
                  <img src={item.pic_url} />
                </li>
                <li>
                  <h2>{item.name}</h2>
                  <h3>
                    <RoundBox />
                    <RoundBox />
                    <RoundBox />
                    147
                  </h3>
                  <h4>
                    $156
                    <CarouselMoney>/day</CarouselMoney>
                  </h4>
                </li>
                <li>
                  <Heartbeat visible={!visible}>
                    <Icon id={'Icon'} type="HeartFill" style={{ width: 'clamp(8px, 2vw, 20px)' }} />
                  </Heartbeat>
                </li>
              </ul>
              <span>view</span>
            </div>
          );
        })}
      </Container>
    </>
  );
};
