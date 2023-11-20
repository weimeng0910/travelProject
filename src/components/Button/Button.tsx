/*
 * @Date: 2023-11-06 17:21:23
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-16 10:45:47
 * @FilePath: /react-antd/src/components/Button/Button.tsx
 * @Description: Button components
 */
import React, { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './style.module.scss';

//枚举列出按钮的大小
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}
//枚举列出按钮类型
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}
//创建props的类型
//按钮的属性
interface BaseButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  btnType?: ButtonType;
  children: ReactNode;
  href?: string;
}
//建立交叉类型
type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
//通过partial来让类型变成可选
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;
/**
 * Button 主函数
 */
const Button: React.FC<ButtonProps> = (props) => {
  //Es6展开语法
  const { className, disabled, size, btnType, children, href, ...restProps } = props;
  //用了 classNames 库的 bind 方法，它通常用于在 React 中动态生成 CSS 类名。
  const cs = classNames.bind(styles);
  //根据条件动态生成一个或多个 CSS 类名
  const classes = cs('btn', className, {
    //在 JavaScript 中，使用变量作为对象的 key 需要使用中括号语法
    //{ [btn-${btnType}`]：btn]: btnType }: 这是一个动态的类名，
    //会根据 btnType 的值动态生成。如果 btnType 存在，将生成类似于 btn-primary 这样的类名。
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    //disable: btnType === 'link' && disabled: 这是一个条件类名，
    //只有在 btnType 是 'link' 且 disabled 为 true 时，才会包含 disable 类名。
    disable: btnType === 'link' && disabled,
  });
  if (btnType === 'link' && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};
//添加默认的props,React 中的 `defaultProps`，它用于为 React 组件的属性设置默认值。
//在这里，给 `Button` 组件设置了默认的属性值。如果在使用 `Button` 组件时没有传递相应的属性，那么这些默认值将被用作组件的属性值。
Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};
export default Button;
