/*
 * @Date: 2023-11-13 18:48:18
 * @Description:  TravelersChoice
 */
import { FC } from 'react';
import { Tabs, Tab, TabBarList, TabPane, TabPanels } from '@/common/components/Tabs';
import { Icon } from '@/common/components/Icon';
import { TabsBox, Container } from './style.module';
import { ProductCollection } from '@/components/productCollection';
import { useBannerGoods } from '@/api';
export interface TravelersChoiceProps {}

export const TravelersChoice: FC<TravelersChoiceProps> = (props) => {
  const { data: goodsList } = useBannerGoods();
  console.log(goodsList, '002');

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
                <Icon id={'Icon'} type="HeartFill" style={{ width: '15px', marginRight: '10px' }} />
                Heartbeat
              </span>
            </Tab>

            <Tab>
              <span>
                <Icon id={'Icon'} type="Fire" style={{ width: '18px', marginRight: '10px' }} />
                Popular
              </span>
            </Tab>

            <Tab>
              <span>
                <Icon id={'Icon'} type="GiftFill" style={{ width: '15px', marginRight: '10px' }} />
                Optimal
              </span>
            </Tab>
            <Tab>
              <span>
                <Icon id={'Icon'} type="SendFill" style={{ width: '15px', marginRight: '10px' }} />
                Featured
              </span>
            </Tab>
            <Tab>
              <span>
                <Icon
                  id={'Icon'}
                  type="BagHeartFill"
                  style={{ width: '15px', marginRight: '10px' }}
                />
                Explore
              </span>
            </Tab>
          </TabBarList>
          <div>
            <div></div>
          </div>
        </TabsBox>

        <TabPanels>
          <TabPane>
            <div>TabContent 0</div>
            <div style={{ width: '800px' }}>
              <ProductCollection hotGoodsData={goodsList?.data.hotGoodsList || []} />
            </div>
          </TabPane>
          <TabPane>TabContent 1</TabPane>
          <TabPane>TabContent 2</TabPane>
          <TabPane>TabContent 3</TabPane>
          <TabPane>TabContent 4</TabPane>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
