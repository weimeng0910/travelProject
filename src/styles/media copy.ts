import { css, CSSObject } from 'styled-components/macro'

/**
 * @date 2023/05/30
 * @description useMediaQuery hook
 */
//常用断点类型设置
interface ISizes {
  xxs: string //xs(超级小屏)<375px
  xs: string //xs(超小屏)<576px
  sm: string //sm(小屏幕)含576px-768px
  md: string //md(中屏)768px-992px
  lg: string //lg(大屏)响应断点>= 992px-1200px
  minWidthHeader: string
  xl: string //(超大屏)1200px(含)
  smallDesktop: string
  xxl: string //xxl(超大)1600px
}
//自定义所用到的媒体断点
export const sizes: ISizes = {
  xxs: '375',
  xs: '480',
  sm: '576',//phone
  md: '768',//tablet
  lg: '992',
  minWidthHeader: '1050',
  xl: '1200',
  smallDesktop: '1366',
  xxl: '1600',
}
//遍历尺寸并创建媒体模板
const media = Object.keys(sizes).reduce(
  (accumulator: Record<string, Function>, label: string) => {
    //获取断点尺寸
    const pxSize: string = sizes[label as keyof ISizes]

    accumulator[label] = (args: CSSObject) =>
      css`
      /* max-width 输出设备中的页面最大可见区域宽度 */
        @media (max-width: ${pxSize}px) {
          ${css(args)}
        }
      `

    return accumulator
  },
  {},
)
export default media;