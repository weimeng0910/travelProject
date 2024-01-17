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

type Props = {
  type: 'Hypnotize' | 'HeartFill' | 'Fire' | 'GiftFill' | 'SendFill' | 'BagHeartFill';
};

export const TravelersChoice: FC<{ GoodsData: IFloorGoods[] }> = ({ GoodsData }) => {
  const IconList: Props['type'][] = ['HeartFill', 'Fire', 'GiftFill', 'SendFill', 'BagHeartFill'];
  return (
    <Container>
      <Tabs defaultIndex={0}>
        <TabsBox>
          <div>
            <Icon id={'Icon'} type="Hypnotize" />
          </div>
          <TabBarList>
            {GoodsData?.map((item, index) => {
              return (
                <Tab key={index}>
                  <span>
                    <Icon
                      id={'Icon'}
                      type={IconList[index]}
                      style={{ width: 'clamp(10px, 1vw, 15px)', marginRight: '10px' }}
                    />
                    <a>{item.name}</a>
                  </span>
                </Tab>
              );
            })}
          </TabBarList>
          <div>
            <div></div>
          </div>
        </TabsBox>

        <TabPanels>
          {GoodsData.map((item, index) => {
            return (
              <TabPane key={index}>
                <ProductCard goodsData={item.goodsList} />
              </TabPane>
            );
          })}
        </TabPanels>
      </Tabs>
    </Container>
  );
};
