import { Link } from 'react-router-dom';
import {
  HomeTwoTone,
  GiftTwoTone,
  PropertySafetyTwoTone,
  BellTwoTone,
  ShoppingTwoTone,
  HeartTwoTone,
  UserOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import type { MenuProps } from 'antd';

import {
  Container,
  Navbar,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  UserRegister,
  MenuButton,
  Logo,
} from './header.module';
import { useMenu } from '@/api'; //data
import { ErrorBox } from '@/common/hooks/lib';

//导入logo跳转回根路由的方法
import { resetRoute } from '@/common/hooks';
/**
 * @date 2023/05/30
 * @description Header
 */
//定义类型
interface VisibleProps {
  //通过utiltype和list组件中的类型保持一致
  visible: boolean;

  handleClick: () => void;
}
//创建图标列表数据
const iconList = {
  '/home': <HomeTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/detail': <GiftTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/tickets': <PropertySafetyTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/placeOrder': <BellTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/shoppingCart': <ShoppingTwoTone twoToneColor="#27ae60" rev={undefined} />,
  '/favorite': <HeartTwoTone twoToneColor="#f41f07" rev={undefined} />,
};
//Antd的menu下拉
const menuItems: MenuProps['items'] = [
  {
    key: '1',
    label: 'sign in',
  },
  {
    key: '2',
    label: 'Register',
  },
  {
    label: 'sub menu',
    key: 'submenu',
    children: [{ label: 'item 3', key: 'submenu-item-1' }],
  },
];

//抽离User组件
const User = () => {
  return (
    <Dropdown overlay={<Menu items={menuItems} />}>
      <UserRegister>
        <span>
          <UserOutlined style={{ paddingRight: '0.625rem' }} rev={undefined} />
        </span>
        My travel
      </UserRegister>
    </Dropdown>
  );
};

//Header
export const Header = ({ visible, handleClick }: VisibleProps) => {
  const { data: menuList = [], isLoading, isError } = useMenu(); //获取菜单数据

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <ErrorBox error={isError} />;
  }
  // console.log(menuList, '001');
  return (
    <>
      <Container>
        <Navbar>
          <HeaderLeft>
            <div>
              <Logo onClick={resetRoute} />
              Travenly
            </div>
          </HeaderLeft>
          {/* 折叠 */}
          <MenuButton onClick={handleClick}>
            <MenuOutlined rev={undefined} />
          </MenuButton>

          <HeaderCenter visible={visible}>
            <ul>
              {Array.isArray(menuList) &&
                menuList.map((item) => (
                  <Link key={item.id} to={item.key}>
                    <li>
                      <span>
                        {iconList[item.key]}
                        {item.label}
                      </span>
                    </li>
                  </Link>
                ))}
            </ul>
          </HeaderCenter>
          <HeaderRight visible={visible}>
            <User />
          </HeaderRight>
        </Navbar>
      </Container>
    </>
  );
};
