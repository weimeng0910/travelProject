/*
 * @Date: 2023-11-02 15:43:25
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-03 09:24:17
 * @FilePath: /travelProject/src/components/Tabs/svgr/index.tsx
 * @Description: Do not edit
 */
import {
  Hypnotize as Home,
  GeoAltFill as Music,
  PersonCircle as Person,
  Speedometer as Search,
  ShareFill,
} from '@styled-icons/Bootstrap';
//定义一个对象
const icons = {
  Hypnotize: Home,
  GeoAltFill: Music,
  PersonCircle: Person,
  Speedometer: Search,
} as const;

interface Props {
  //类型来自对象中的銉对应的值，意味着类型只能是home，music
  type: keyof typeof icons;
  [key: string]: unknown;
}
//该组件或函数根据“type”变量的值动态呈现React组件并将“rest”道具传递给它。
//假设“icons”是一个对象，其中每个属性对应一个 React 组件，“type”是表示所需组件的字符串，
//此代码尝试使用“type”变量从“icons”对象中选择适当的组件，然后使用“rest”道具渲染该组件
export const Icon = (props: Props) => {
  const { type, ...rest } = props;
  let Component = icons[type];
  return <Component {...rest} />;
};
