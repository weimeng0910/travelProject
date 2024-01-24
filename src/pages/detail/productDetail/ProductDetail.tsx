/*
 * @Date: 2024-01-16 11:15:37
 * @Description: ProductDetail
 */
import React from 'react';
import { Divider } from 'antd';

import { useDocumentTitle } from '@/common/hooks/useDocumentTitle';
import { IGoods } from '@/types/goods';
import { RoundBox } from '@/components/ProductCard/ProductCard.module';
import {
  SketchOutlined,
  RiseOutlined,
  HistoryOutlined,
  TeamOutlined,
  DashboardOutlined,
  PhoneOutlined,
  MessageOutlined,
  StarOutlined,
} from '@ant-design/icons';
import {
  ProductDetailBox,
  ProductTitleBox,
  ProductImageBox,
  ProducTextBox,
  BookButton,
} from './DatailPage.module';
interface ProductProps {
  goodsData: Partial<IGoods>;
}
export const ProductDetail: React.FC<ProductProps> = ({ goodsData }) => {
  let title = goodsData.name as string;
  useDocumentTitle(title, true);
  return (
    <div>
      <ProductDetailBox>
        <ProductTitleBox>
          <h1>{goodsData.name}</h1>
          <h2>{goodsData.brief}</h2>
          <div>
            <span>
              <RoundBox />
              <RoundBox />
              <RoundBox />
            </span>
            <span>{goodsData.Comments} reviews</span>
            <span>
              <SketchOutlined style={{ color: 'red', fontSize: 'clamp(5px, 1.5vw, 20px)' }} />
            </span>
            <span>Recommended by 93% of travelers</span>
          </div>
        </ProductTitleBox>
        <ProductImageBox>
          <div>
            <img src={goodsData.pic_url} />
          </div>
          <div>
            <img src={goodsData.pic01_url} />
            <img src={goodsData.pic02_url} />
          </div>
        </ProductImageBox>

        <ProducTextBox>
          <div>
            <h1>About</h1>
            <h3>{goodsData.detail}</h3>

            <Divider />
            <ul>
              <li>
                <TeamOutlined style={{ marginRight: '5px' }} />
                Ages 10-65, max of 8 per group
              </li>
              <li>
                <HistoryOutlined style={{ marginRight: '5px' }} />
                Duration: 4–5 hours
              </li>
              <li>
                <DashboardOutlined style={{ marginRight: '5px' }} />
                Start time: Check availability
              </li>
              <li>
                <PhoneOutlined style={{ marginRight: '5px' }} />
                Mobile ticket
              </li>
              <li>
                <MessageOutlined style={{ marginRight: '5px' }} />
                Live guide: English
              </li>
            </ul>
            <Divider />
            <h1>Highlights</h1>
            <ul>
              <li>
                <StarOutlined style={{ marginRight: '5px' }} />
                Warm beverages and campfire snacks to keep warm are included
              </li>
              <li>
                {' '}
                <StarOutlined style={{ marginRight: '5px' }} />
                Thermal gear, boots, and headlamps are provided
              </li>
              <li>
                {' '}
                <StarOutlined style={{ marginRight: '5px' }} />
                Expert tips on how to get the best photos
              </li>
              <li>
                {' '}
                <StarOutlined style={{ marginRight: '5px' }} />
                Round-trip transportation from Rovaniemi hotels
              </li>
            </ul>
          </div>
          <div>
            <div>
              <h1>Reserve your spot</h1>
              <span>
                <h1>${goodsData.retail_price}</h1>

                <BookButton>
                  Book on Viator{' '}
                  <RiseOutlined
                    style={{ marginLeft: '5px', fontSize: 'clamp(5px, 1.5vw, 20px)' }}
                  />
                </BookButton>
              </span>

              <h3>Lowest price guaranteeReserve now </h3>
            </div>
          </div>
        </ProducTextBox>
      </ProductDetailBox>
    </div>
  );
};
