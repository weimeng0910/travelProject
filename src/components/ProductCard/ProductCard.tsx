import { FC, useState } from 'react';
import { Container, ProductContent, Heartbeat, RoundBox } from './ProductCard.module';
import { IGoods } from '@/types/goods';
import { Icon } from '@/common/components/Icon';
import { CarouselMoney } from '@/components/Swiper/SwiperPage.module';

/*
 * @Date: 2023-10-13 09:29:37
 * @Description: ProductCard
 */

export const ProductCard: FC<Partial<IGoods>> = (props) => {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Container>
        <div>
          <ul>
            <li>
              <img src={'images/2023-005.png'} />
            </li>
            <li>
              <h2>Riga Old Town walking tour</h2>
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
        <div>
          <ul>
            <li>
              <img src={'images/2023-005.png'} />
            </li>
            <li>
              <h2>Riga Old Town walking tour</h2>
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
              <Heartbeat visible={visible}>
                <Icon id={'Icon'} type="HeartFill" style={{ width: 'clamp(8px, 2vw, 20px)' }} />
              </Heartbeat>
            </li>
          </ul>
          <span>view</span>
        </div>
        <div>
          <ul>
            <li>
              <img src={'images/2023-005.png'} />
            </li>
            <li>
              <h2>Riga Old Town walking tour</h2>
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
              <Heartbeat visible={visible}>
                <Icon id={'Icon'} type="HeartFill" style={{ width: 'clamp(8px, 2vw, 20px)' }} />
              </Heartbeat>
            </li>
          </ul>
          <span>view</span>
        </div>
        <div>
          <ul>
            <li>
              <img src={'images/2023-005.png'} />
            </li>
            <li>
              <h2>Riga Old Town walking tour</h2>
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
              <Heartbeat visible={visible}>
                <Icon id={'Icon'} type="HeartFill" style={{ width: 'clamp(8px, 2vw, 20px)' }} />
              </Heartbeat>
            </li>
          </ul>
          <span>view</span>
        </div>
      </Container>
    </>
  );
};
