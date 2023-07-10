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
 * 产品数据
 * */

export const productList = [
  {
    id: 1,
    name:
      "Boston: Duck Tours",
    goods_sn: 1,
    category_id: 1,
    brand_id: 2,
    keywords: 'US',
    brief: 'super touristy',
    is_on_sale: true,
    sort_order: 9,
    pic_url: '/details/img/2023-001.png',
    is_new: true,
    is_hot: true,
    retail_price: "11990",
    counter_price: "13000",
    add_time: "",
    update_tiem: "",
    deleted_tiem: "",
    detail: "When you’re in Boston, history lessons are inevitable. Every corner of the city practically marks a spot where something significant in American history happened. And if you’re going to learn about the glory days of the Revolutionary War, you might has well have some laughs at the same time. Enter this Duck Tour, where you board an amphibious World War II vehicle and a tour guide takes you through the city and eventually onto the Charles River. The guides here are also comedians, which has the potential to induce groans instead of laughs, but trust us: These guys are hilarious and really know the city."
  },
  {
    id: 2,
    name:
      "Chicago: Architectural Boat Tour",
    goods_sn: 1,
    category_id: 1,
    brand_id: 2,
    keywords: 'US',
    brief: 'super touristy',
    is_on_sale: true,
    sort_order: 9,
    pic_url: '/details/img/2023-002.png',
    is_new: true,
    is_hot: true,
    retail_price: "11990",
    counter_price: "13000",
    add_time: "",
    update_tiem: "",
    deleted_tiem: "",
    detail: "The Windy City has one of the most enviable skylines in the world, and the best way to learn about it is via a boat that winds through the Chicago River. Informative tour guides (who usually double as architecture buffs) share the city’s colorful history as you get up close and personal with some of Chicago’s famous skyscrapers. If you never considered architecture to be a particularly interesting subject, this Architecture Tour will definitely change your mind."
  },
  {
    id: 3,
    name:
      "New York City: Full Island Sightseeing Cruise",
    goods_sn: 1,
    category_id: 1,
    brand_id: 2,
    keywords: 'US',
    brief: 'super touristy',
    is_on_sale: true,
    sort_order: 9,
    pic_url: '/details/img/2023-003.png',
    is_new: true,
    is_hot: true,
    retail_price: "11990",
    counter_price: "13000",
    add_time: "",
    update_tiem: "",
    deleted_tiem: "",
    detail: "Even though Manhattan isn’t that big of an island (it’s just a little over 13 miles long), the city provides a lot of ground to cover. And it’s practically impossible to see the major parts of the city by foot. That’s why it’s a smart idea to hop on a boat. This full island sightseeing cruise circles around all of Manhattan, which means in just under three hours, you’ll see parts of downtown, the Bronx, go under all the major bridges, and even get some glimpses of the Statue of Liberty. Bonus: There’s an onboard bar for drinks and snacks, too."
  },
  {
    id: 4,
    name:
      "Miami: Helicopter tour",
    goods_sn: 4,
    category_id: 4,
    brand_id: 2,
    keywords: 'US',
    brief: 'super touristy',
    is_on_sale: true,
    sort_order: 9,
    pic_url: '/details/img/2023-004.png',
    is_new: true,
    is_hot: true,
    retail_price: "11990",
    counter_price: "13000",
    add_time: "",
    update_tiem: "",
    deleted_tiem: "",
    detail: "It’s time to channel the exuberance of your inner Tony Montana, because you’re about to hop around the city in a helicopter. If you want to see everything Miami has to offer, the best way to do it is from up above. And this helicopter tour takes you over the city’s famous football stadiums, glistening beaches, and the chain of islands leading to Key West. You’ve never seen Miami Beach quite like this, and if you want to feel like a baller on your vacay, a helicopter is definitely the way to go."
  },
];