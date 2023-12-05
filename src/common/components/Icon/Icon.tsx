/*
 * @Date: 2023-12-01 12:42:00
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-12-04 11:47:39
 * @FilePath: /travelProject/src/common/components/Icon/Icon.tsx
 * @Description: Icon
 */
import {
  Hypnotize as Hypnotize,
  HeartFill as Hotels,
  Fire as Top,
  GiftFill as Gift,
  SendFill as Plane,
  BagHeartFill as Bag,
} from '@styled-icons/Bootstrap';

//定义一个对象
export const icons = {
  Hypnotize: Hypnotize,
  HeartFill: Hotels,
  Fire: Top,
  GiftFill: Gift,
  SendFill: Plane,
  BagHeartFill: Bag,
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
