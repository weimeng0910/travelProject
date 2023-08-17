import styled from 'styled-components/macro';
import { Menu } from 'antd';
/**
 * @date 2023/05/30
 * @description SideMenu-css
 */
export const StyledMenu = styled(Menu)`
  margin-top: 10px;
  border-radius: 25px;
  width: 50%;
  background: #f9fbfb;
  .ant-menu-submenu-title {
    color: #95a5a6;
    .ant-menu-submenu-arrow::before,
    .ant-menu-submenu-arrow::after {
      background: #b8c7ce !important;
    }
  }
  .ant-menu-submenu-title:hover {
    background: #16a085;
    transform: scale(1.05);
    border-radius: 5px;
    color: #fff;
    box-shadow: 0 0 30px -10px #000;
    .ant-menu-submenu-arrow::before,
    .ant-menu-submenu-arrow::after {
      background: #fff !important;
    }
  }

  // 默认箭头样式
  .ant-menu-submenu:not(.ant-menu-submenu-open) {
    > .ant-menu-submenu-title {
      > .ant-menu-submenu-arrow {
        &::before {
          width: 12px;
          transform: rotate(135deg) translateX(4.5px) !important;
        }
        &::after {
          width: 10px;
          transform: rotate(-135deg) translateX(4.5px) !important;
        }
      }
    }
  }
  // 箭头展开样式
  .ant-menu-submenu.ant-menu-submenu-open {
    .ant-menu-submenu-title[aria-expanded='true'] {
      .ant-menu-submenu-arrow {
        &::before {
          width: 12px;
          transform: rotate(135deg) translateX(4.5px) !important;
        }
        &::after {
          width: 12px;
          transform: rotate(-135deg) translateX(4.5px) !important;
        }
      }
    }
  }
  // 鼠标滑过效果样式
  .ant-menu-submenu-open,
  .ant-menu-submenu-active {
    &:hover {
      .ant-menu-submenu-arrow {
        &:hover {
          color: #2ecc71 !important;
        }
        color: #2ecc71;
      }
    }
  }

`;