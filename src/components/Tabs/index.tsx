/*
 * @Date: 2023-11-13 18:48:18
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-20 18:47:37
 * @FilePath: /travelProject/src/components/Tabs/index.tsx
 * @Description: Home Tabs
 */
import { Tabs, Tab, TabBarList, TabPane, TabPanels } from './Tabs';
import { Icon } from '@/components/Tabs/svgr';

import { TabsBox, Container } from './style.module';
export interface BasicLayoutProps {}
const TabsBasicLayou: React.FC<BasicLayoutProps> = (props) => {
  return (
    <Container>
      {/*  -> -> Prodiver，提供选项卡状态初始化、选项卡状态管理、数据传递以及 tabs 的实体组件 */}
      <Tabs defaultIndex={0}>
        {/*  -> 渲染 tablist 的实体组件 */}
        <TabsBox>
          <div>
            <Icon id={'Icon'} type="Hypnotize" style={{ width: '20px' }} />
          </div>
          <TabBarList>
            <Tab>
              <span>
                <a>
                  <Icon id={'Icon'} type="GeoAltFill" style={{ width: '15px' }} />
                </a>
                <a>0000001</a>
              </span>
            </Tab>

            <Tab>
              <span>
                <a>
                  <Icon id={'Icon'} type="PersonCircle" style={{ width: '15px' }} />
                </a>
                <a> 0000002</a>
              </span>
            </Tab>

            <Tab>
              <span>
                <a>
                  <Icon id={'Icon'} type="Speedometer" style={{ width: '15px' }} />
                </a>
                <a>0000003</a>
              </span>
            </Tab>
            <Tab>
              <span>
                <a>
                  <Icon id={'Icon'} type="ShareFill" style={{ width: '15px' }} />
                </a>
                <a>0000004</a>
              </span>
            </Tab>
            <Tab>
              <span>
                {' '}
                <a>
                  <Icon id={'Icon'} type="ShareFill" style={{ width: '15px' }} />
                </a>
                <a>0000005</a>
              </span>
            </Tab>
          </TabBarList>
          <div>
            <div></div>
          </div>
        </TabsBox>

        <TabPanels>
          <TabPane>TabContent 0</TabPane>
          <TabPane>TabContent 1</TabPane>
          <TabPane>TabContent 2</TabPane>
          <TabPane>TabContent 3</TabPane>
          <TabPane>TabContent 4</TabPane>
        </TabPanels>
      </Tabs>
    </Container>
  );
};
export default TabsBasicLayou;
