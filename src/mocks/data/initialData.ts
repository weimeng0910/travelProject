/** 
* @date 06.06.2023
* @file  data
*/

export const menu = [
  {
    id: 1,
    label: "Home",
    key: "/home"
  },
  {
    id: 2,
    label: "Discover",
    key: "/detail"

  },
  {
    id: 3,
    label: "Tickets",
    key: "/tickets"
  },
  {
    id: 4,
    label: "Favorite",
    key: "/favorite"
  },
  {
    id: 5,
    label: "Transaction",
    key: "/placeOrder"
  },
  {
    id: 6,
    label: "Cart",
    key: "/shoppingCart"
  },
];
export const sideMenuList = [
  {
    // 注意！注意！有children的菜单项，path不会使用的，所以path为什么都无所谓；
    //没children的，即children的length等于0的，才会使用path属性做路由跳转
    MenuId: 1,
    title: "Destination deals",
    path: "前端三大框架",
    icon: "el-icon-star-off",
    MenuLink: null,
    hidden: false,
    children: [
      {
        MenuId: 2,
        title: "爸妈游",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 3,
        title: "亲子游",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 4,
        title: "蜜月游",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
    ],
  },
  {
    MenuId: 5,
    title: "Top hotel beach destinations",
    path: "前端三大框架",
    icon: "el-icon-star-off",
    MenuLink: null,
    hidden: false,
    children: [
      {
        MenuId: 6,
        title: "周边目的地",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 7,
        title: "热门景点",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
    ],
  },
  {
    MenuId: 8,
    title: "Top hotel city destinations",
    path: "前端三大框架",
    icon: "el-icon-star-off",
    MenuLink: null,
    hidden: false,
    children: [
      {
        MenuId: 9,
        title: "广东",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 10,
        title: "浙江",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 11,
        title: "江苏",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
    ],
  },
  {
    MenuId: 12,
    title: "Top vacation destinations",
    path: "前端三大框架",
    icon: "el-icon-star-off",
    MenuLink: null,
    hidden: false,
    children: [
      {
        MenuId: 13,
        title: "热门目的地",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 14,
        title: "热门景点",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
    ],
  },
  {
    MenuId: 15,
    title: "Top flight destinations",
    path: "前端三大框架",
    icon: "el-icon-star-off",
    MenuLink: null,
    hidden: false,
    children: [
      {
        MenuId: 16,
        title: "热门邮轮航线",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 17,
        title: "热门景点",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 18,
        title: "蜜月游",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
    ],
  },
  {
    MenuId: 19,
    title: "Top car rental destinations in America",
    path: "前端三大框架",
    icon: "el-icon-star-off",
    MenuLink: null,
    hidden: false,
    children: [
      {
        MenuId: 20,
        title: "热门邮轮航线",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 21,
        title: "热门景点",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
      {
        MenuId: 22,
        title: "蜜月游",
        path: "前端三大框架",
        icon: "el-icon-star-off",
        MenuLink: null,
        hidden: false,
        children: [{ title: '001' }, { title: '002' }, { title: '0013' }, { title: '004' }],
      },
    ],
  },
];
/**
 * 首页推荐产品数据
 * */
// 爆款推荐
export const productList1 = [
  {
    id: 1,
    title:
      "埃及阿斯旺+卢克索+红海Red Sea+开罗+亚历山大12日跟团游(5钻)·【官方旗舰明星纯玩团】25人封顶|含签证小费全程餐|3晚尼罗河游轮+3晚红海全包度假村+1晚底比斯古都|升级内陆飞机|优质中文导游队伍|七大神庙+赠项目",
    price: "11990",
  },
  {
    id: 2,
    title: "摩洛哥撒哈拉沙漠+卡萨布兰卡+马拉喀什+舍夫沙...",
    price: "13290",
  },
  {
    id: 3,
    title: "越南胡志明市+美奈+芽庄+河内7日6晚跟团游(4钻)...",
    price: "4000",
  },
  {
    id: 4,
    title: "迪拜+阿布扎比6日跟团游(5钻)·【携程国旅纯玩...",
    price: "7399",
  },
  {
    id: 5,
    title: "泰国曼谷+芭堤雅6日5晚跟团游(5钻)·【纯玩】『可...",
    price: "3499",
  },
  {
    id: 6,
    title: "日本大阪+京都+箱根+东京6日5晚跟团游(4钻)·【浪...",
    price: "5999",
  },
  {
    id: 7,
    title: "新加坡+马来西亚6日5晚跟团游(5钻)·【纯玩无购物...",
    price: "6199",
  },
  {
    id: 8,
    title: "法国+德国+意大利+瑞士12日跟团游(4钻)·【匠心定...",
    price: "13699",
  },
  {
    id: 9,
    title: "印度尼西亚巴厘岛7日5晚私家团(5钻)·A线独栋泳...",
    price: "5021",
  },
];