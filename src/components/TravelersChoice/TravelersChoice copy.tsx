/*
 * @Date: 2023-11-13 18:48:18
 * @Description:  TravelersChoice
 */
import { FC } from 'react';
import { Tabs, Tab, TabBarList, TabPane, TabPanels } from '@/common/components/Tabs';
import { Icon } from '@/common/hooks/Icon';
import { TabsBox, Container } from './style.module';
import { ProductCard } from '@/components/ProductCard';
import { IFloorGoods } from '@/types/goods';

export const TravelersChoice: FC<{ GoodsData: IFloorGoods }> = ({ GoodsData }) => {
  console.log(GoodsData, '004');

  return (
    <Container>
      <Tabs defaultIndex={0}>
        <TabsBox>
          <div>
            <Icon id={'Icon'} type="Hypnotize" />
          </div>
          <TabBarList>
            <Tab>
              <span>
                <Icon
                  id={'Icon'}
                  type="HeartFill"
                  style={{ width: 'clamp(10px, 1vw, 15px)', marginRight: '10px' }}
                />
                <a>Heartbeat</a>
              </span>
            </Tab>

            <Tab>
              <span>
                <Icon
                  id={'Icon'}
                  type="Fire"
                  style={{ width: 'clamp(10px, 1vw, 15px)', marginRight: '10px' }}
                />
                <a>Popular</a>
              </span>
            </Tab>

            <Tab>
              <span>
                <Icon
                  id={'Icon'}
                  type="GiftFill"
                  style={{ width: 'clamp(10px, 1vw, 15px)', marginRight: '10px' }}
                />
                <a>Optimal</a>
              </span>
            </Tab>
            <Tab>
              <span>
                <Icon
                  id={'Icon'}
                  type="SendFill"
                  style={{ width: 'clamp(10px, 1vw, 15px)', marginRight: '10px' }}
                />
                <a>Featured</a>
              </span>
            </Tab>
            <Tab>
              <span>
                <Icon
                  id={'Icon'}
                  type="BagHeartFill"
                  style={{ width: 'clamp(10px, 1vw, 15px)', marginRight: '10px' }}
                />
                <a>Explore</a>
              </span>
            </Tab>
          </TabBarList>
          <div>
            <div></div>
          </div>
        </TabsBox>

        <TabPanels>
          <TabPane>
            {/*<ProductCard goodsData={GoodsData?.topicList} />*/}
            111
          </TabPane>
          <TabPane>222</TabPane>
          <TabPane>333</TabPane>
          <TabPane>444</TabPane>
          <TabPane>555</TabPane>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
