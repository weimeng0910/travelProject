/** 
* @date 06.06.2023
* @file  data
*/
// header menu
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
// side menu
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
export const goodsData = {
  "errno": 0,
  "data": {
    "banner": [
      {
        "id": 1,
        "name": "Boston: Duck Tours",
        "goods_sn": 1,
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-001.png',
        "is_new": true,
        "is_hot": true,
        "Kommentar": 5678,
        "retail_price": 13450,
        "counter_price": 13000,
        "add_time": "2018-02-01 00:00:00",
        "update_tiem": "2018-02-01 00:00:00",
        "deleted_tiem": "",
        "detail": "When you’re in Boston, history lessons are inevitable. Every corner of the city practically marks a spot where something significant in American history happened. And if you’re going to learn about the glory days of the Revolutionary War, you might has well have some laughs at the same time. Enter this Duck Tour, where you board an amphibious World War II vehicle and a tour guide takes you through the city and eventually onto the Charles River. The guides here are also comedians, which has the potential to induce groans instead of laughs, but trust us: These guys are hilarious and really know the city."
      },
      {
        "id": 2,
        "name": "Grand Circle Island and Haleiwa 9 Hour Tour",
        "goods_sn": 1,
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-002.png',
        "is_new": true,
        "is_hot": true,
        "Kommentar": 8888,
        "retail_price": 11990,
        "counter_price": 6789,
        "add_time": "2018-02-01 00:00:00",
        "update_tiem": "2018-02-01 00:00:00",
        "deleted_tiem": "",
        "detail": "When you’re in Boston, history lessons are inevitable. Every corner of the city practically marks a spot where something significant in American history happened. And if you’re going to learn about the glory days of the Revolutionary War, you might has well have some laughs at the same time. Enter this Duck Tour, where you board an amphibious World War II vehicle and a tour guide takes you through the city and eventually onto the Charles River. The guides here are also comedians, which has the potential to induce groans instead of laughs, but trust us: These guys are hilarious and really know the city."
      },
      {
        "id": 3,
        "name": "Juneau Wildlife Whale Watching",
        "goods_sn": 1,
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-003.png',
        "is_new": true,
        "is_hot": true,
        "Kommentar": 8883,
        "retail_price": 990,
        "counter_price": 3456,
        "add_time": "2018-02-01 00:00:00",
        "update_tiem": "2018-02-01 00:00:00",
        "deleted_tiem": "",
        "detail": "When your cruise stops at Juneau, see whales in their natural habitat on this whale-watching boat trip, all without the fuss of organizing shore transport. Prebook to secure your place, board a comfortable boat with outdoor decks and heated cabins, and cruise Alaska’s waters to see marine life in the wild. Then, enjoy guaranteed sightings of humpback whales, with a naturalist providing commentary on their behaviors as you cruise."
      },
      {
        "id": 4,
        "name": "Island Ultimate Jeep Safari in Arub",
        "goods_sn": 1,
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-004.png',
        "is_new": true,
        "is_hot": true,
        "Kommentar": 38888,
        "retail_price": 6990,
        "counter_price": 789,
        "add_time": "2018-02-01 00:00:00",
        "update_tiem": "2018-02-01 00:00:00",
        "deleted_tiem": "",
        "detail":
          "Visit Aruba’s Natural Pool and Baby Beach on a unique off-road 4WD adventure to the island’s top natural attractions. Ride in a 4x4 Land Rover, specially designed to traverse the rugged terrain of Arikok National Park. Stop by landmarks like the California Lighthouse and Natural Bridge, with free time to snorkel and swim at the Natural Pool and Baby Beach. A barbecue lunch and cold beverages are included in your full-day tour."
      },
      {
        "id": 5,
        "name": "Cappadocia Balloon Ride and Champagne Breakfast",
        "goods_sn": 1,
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-005.png',
        "is_new": true,
        "is_hot": true,
        "Kommentar": 118888,
        "retail_price": 1690,
        "counter_price": 6666,
        "add_time": "2018-02-01 00:00:00",
        "update_tiem": "2018-02-01 00:00:00",
        "deleted_tiem": "",
        "detail": "Soar through the skies of Cappadocia on this magical hot-air-balloon tour in Turkey. Choose your flight duration, and ascend into the atmosphere where you can admire the region’s lunar landscape from above. Before your flight, enjoy a buffet breakfast with coffee or tea. No trip to Turkey is complete without treasuring this unforgettable experience."
      },
    ],
    "newGoodsList": [
      {
        "id": 1181000,
        "name": "Boston: Duck Tours",
        "goods_sn": 1,
        "category_id": 1,
        "brand_id": 2,
        "keywords": 'US',
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-001.png',
        "is_new": true,
        "is_hot": true,
        "retail_price": 11990,
        "counter_price": 13000,
        "add_time": "",
        "update_tiem": "",
        "deleted_tiem": "",
        "detail": "When you’re in Boston, history lessons are inevitable. Every corner of the city practically marks a spot where something significant in American history happened. And if you’re going to learn about the glory days of the Revolutionary War, you might has well have some laughs at the same time. Enter this Duck Tour, where you board an amphibious World War II vehicle and a tour guide takes you through the city and eventually onto the Charles River. The guides here are also comedians, which has the potential to induce groans instead of laughs, but trust us: These guys are hilarious and really know the city."
      },
      {
        "id": 1116011,
        "name": 'Chicago: Architectural Boat Tour',
        "goods_sn": 1,
        "category_id": 1,
        "brand_id": 2,
        "keywords": 'US',
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-002.png',
        "is_new": true,
        "is_hot": true,
        "retail_price": 11990,
        "counter_price": 13000,
        "add_time": '',
        "update_tiem": '',
        "deleted_tiem": '',
        "detail": 'The Windy City has one of the most enviable skylines in the world, and the best way to learn about it is via a boat that winds through the Chicago River. Informative tour guides (who usually double as architecture buffs) share the city’s colorful history as you get up close and personal with some of Chicago’s famous skyscrapers. If you never considered architecture to be a particularly interesting subject, this Architecture Tour will definitely change your mind'
      },
      {
        "id": 1127047,
        "name": 'New York City: Full Island Sightseeing Cruise',
        "goods_sn": 1,
        "category_id": 1,
        "brand_id": 2,
        "keywords": 'US',
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-003.png',
        "is_new": true,
        "is_hot": true,
        "retail_price": 11990,
        "counter_price": 13000,
        "add_time": '',
        "update_tiem": '',
        "deleted_tiem": '',
        "detail": 'Even though Manhattan isn’t that big of an island (it’s just a little over 13 miles long)'
      },
      {
        "id": 1135002,
        "name": 'Miami: Helicopter tour',
        "goods_sn": 1,
        "category_id": 1,
        "brand_id": 2,
        "keywords": 'US',
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-004.png',
        "is_new": true,
        "is_hot": true,
        "retail_price": 11990,
        "counter_price": 13000,
        "add_time": '',
        "update_tiem": '',
        "deleted_tiem": '',
        "detail": 'It’s time to channel the exuberance of your inner Tony Montana, because you’re about to hop around the city in a helicopter. If you want to see everything Miami has to offer, the best way to do it is from up above. And this helicopter tour takes you over the city’s famous football stadiums, glistening beaches, and the chain of islands leading to Key West. You’ve never seen Miami Beach quite like this, and if you want to feel like a baller on your vacay, a helicopter is definitely the way to go.'
      },

      {
        "id": 1152161,
        "name": 'oxford: Helicopter tour',
        "goods_sn": 1,
        "category_id": 1,
        "brand_id": 2,
        "keywords": 'US',
        "brief": 'super touristy',
        "is_on_sale": true,
        "sort_order": 9,
        "pic_url": 'images/2023-005.png',
        "is_new": true,
        "is_hot": true,
        "retail_price": 11990,
        "counter_price": 13000,
        "add_time": '',
        "update_tiem": '',
        "deleted_tiem": '',
        "detail": 'It’s time to channel the exuberance of your inner Tony Montana, because you’re about to hop around the city in a helicopter. If you want to see everything Miami has to offer, the best way to do it is from up above. And this helicopter tour takes you over the city’s famous football stadiums, glistening beaches, and the chain of islands leading to Key West. You’ve never seen Miami Beach quite like this, and if you want to feel like a baller on your vacay, a helicopter is definitely the way to go.'
      },
    ],
    "couponList": [
      {
        "id": 2,
        "name": "限时满减券",
        "desc": "全场通用",
        "tag": "无限制",
        "discount": 10.00,
        "min": 99.00,
        "days": 10
      }
    ],
    "channel": [
      {
        "id": 1005000,
        "name": "居家",
        "iconUrl": "http://yanxuan.nosdn.127.net/a45c2c262a476fea0b9fc684fed91ef5.png"
      },
      {
        "id": 1005001,
        "name": "餐厨",
        "iconUrl": "http://yanxuan.nosdn.127.net/ad8b00d084cb7d0958998edb5fee9c0a.png"
      },
      {
        "id": 1005002,
        "name": "饮食",
        "iconUrl": "http://yanxuan.nosdn.127.net/c9280327a3fd2374c000f6bf52dff6eb.png"
      },
      {
        "id": 1008000,
        "name": "配件",
        "iconUrl": "http://yanxuan.nosdn.127.net/11abb11c4cfdee59abfb6d16caca4c6a.png"
      },
      {
        "id": 1010000,
        "name": "服装",
        "iconUrl": "http://yanxuan.nosdn.127.net/28a685c96f91584e7e4876f1397767db.png"
      },
      {
        "id": 1011000,
        "name": "婴童",
        "iconUrl": "http://yanxuan.nosdn.127.net/1ba9967b8de1ac50fad21774a4494f5d.png"
      },
      {
        "id": 1012000,
        "name": "杂货",
        "iconUrl": "http://yanxuan.nosdn.127.net/c2a3d6349e72c35931fe3b5bcd0966be.png"
      },
      {
        "id": 1013001,
        "name": "洗护",
        "iconUrl": "http://yanxuan.nosdn.127.net/9fe068776b6b1fca13053d68e9c0a83f.png"
      },
      {
        "id": 1019000,
        "name": "志趣",
        "iconUrl": "http://yanxuan.nosdn.127.net/7093cfecb9dde1dd3eaf459623df4071.png"
      }
    ],
    "grouponList": [
      {
        "id": 1109008,
        "name": "云端沙发组合",
        "brief": "MUJI供应商携手打造",
        "picUrl": "http://yanxuan.nosdn.127.net/c5be2604c0e4186a4e7079feeb742cee.png",
        "counterPrice": 4019.00,
        "retailPrice": 3999.00,
        "grouponPrice": 3949.00,
        "grouponDiscount": 50,
        "grouponMember": 5
      },
      {
        "id": 1039051,
        "name": "多功能午睡枕",
        "brief": "放松自在的午后时光",
        "picUrl": "http://yanxuan.nosdn.127.net/c8ca0600fa7ba11ca8be6a3173dd38c9.png",
        "counterPrice": 99.00,
        "retailPrice": 79.00,
        "grouponPrice": 59.00,
        "grouponDiscount": 20,
        "grouponMember": 20
      }
    ],

    "brandList": [
      {
        "id": 1001000,
        "name": "MUJI制造商",
        "desc": "严选精选了MUJI制造商和生产原料，\n用几乎零利润的价格，剔除品牌溢价，\n让用户享受原品牌的品质生活。",
        "picUrl": "http://yanxuan.nosdn.127.net/1541445967645114dd75f6b0edc4762d.png",
        "floorPrice": 12.90
      },
      {
        "id": 1001002,
        "name": "内野制造商",
        "desc": "严选从世界各地挑选毛巾，最终选择了为日本内野代工的工厂，追求毛巾的柔软度与功能性。品质比肩商场几百元的毛巾。",
        "picUrl": "http://yanxuan.nosdn.127.net/8ca3ce091504f8aa1fba3fdbb7a6e351.png",
        "floorPrice": 29.00
      },
      {
        "id": 1001003,
        "name": "Adidas制造商",
        "desc": "严选找到为Adidas等品牌制造商，\n选取优质原材料，与厂方一起设计，\n为你提供好的理想的运动装备。",
        "picUrl": "http://yanxuan.nosdn.127.net/335334d0deaff6dc3376334822ab3a2f.png",
        "floorPrice": 49.00
      },
      {
        "id": 1001007,
        "name": "优衣库制造商",
        "desc": "严选找到日本知名服装UNIQLO的制造商，\n选取优质长绒棉和精梳工艺，\n与厂方一起设计，为你提供理想的棉袜。",
        "picUrl": "http://yanxuan.nosdn.127.net/0d72832e37e7e3ea391b519abbbc95a3.png",
        "floorPrice": 29.00
      }
    ],
    "hotGoodsList": [
      {
        "id": 1152008,
        "name": "魔兽世界 部落 护腕 一只",
        "brief": "吸汗、舒适、弹性、防护、耐用",
        "picUrl": "http://yanxuan.nosdn.127.net/203cb83d93606865e3ddde57b69b9e9a.png",
        "isNew": false,
        "isHot": true,
        "counterPrice": 49.00,
        "retailPrice": 29.00
      },
      {
        "id": 1152009,
        "name": "魔兽世界 联盟 护腕 一只",
        "brief": "吸汗、舒适、弹性、防护、耐用",
        "picUrl": "http://yanxuan.nosdn.127.net/ae6d41117717387b82dcaf1dfce0cd97.png",
        "isNew": false,
        "isHot": true,
        "counterPrice": 49.00,
        "retailPrice": 29.00
      },
      {
        "id": 1152031,
        "name": "魔兽世界-伊利丹颈枕眼罩套装",
        "brief": "差旅好伴侣",
        "picUrl": "http://yanxuan.nosdn.127.net/fd6e78a397bd9e9804116a36f0270b0a.png",
        "isNew": false,
        "isHot": true,
        "counterPrice": 119.00,
        "retailPrice": 99.00
      },
      {
        "id": 1022000,
        "name": "意式毛线绣球四件套",
        "brief": "浪漫毛线绣球，简约而不简单",
        "picUrl": "http://yanxuan.nosdn.127.net/5350e35e6f22165f38928f3c2c52ac57.png",
        "isNew": false,
        "isHot": true,
        "counterPrice": 319.00,
        "retailPrice": 299.00
      },
      {
        "id": 1011004,
        "name": "色织精梳AB纱格纹空调被",
        "brief": "加大加厚，双色精彩",
        "picUrl": "http://yanxuan.nosdn.127.net/0984c9388a2c3fd2335779da904be393.png",
        "isNew": false,
        "isHot": true,
        "counterPrice": 219.00,
        "retailPrice": 199.00
      },
      {
        "id": 1084003,
        "name": "纯棉美式绞花针织盖毯",
        "brief": "美式提花，温暖舒适",
        "picUrl": "http://yanxuan.nosdn.127.net/cf40c167e7054fe184d49f19121f63c7.png",
        "isNew": false,
        "isHot": true,
        "counterPrice": 219.00,
        "retailPrice": 199.00
      }
    ],
    "topicList": [
      {
        "id": 264,
        "title": "设计师们推荐的应季好物",
        "subtitle": "原创设计春款系列上新",
        "price": 29.90,
        "readCount": "77.7k",
        "picUrl": "https://yanxuan.nosdn.127.net/14918201901050274.jpg"
      },
      {
        "id": 266,
        "title": "一条丝巾就能提升时髦度",
        "subtitle": "不知道大家对去年G20时，严选与国礼制造商一起推出的《凤凰于飞》等几款丝巾是否还...",
        "price": 0.00,
        "readCount": "35.0k",
        "picUrl": "https://yanxuan.nosdn.127.net/14919007135160213.jpg"
      },
      {
        "id": 268,
        "title": "米饭好吃的秘诀：会呼吸的锅",
        "subtitle": "今年1月份，我们联系到了日本伊贺地区的长谷园，那里有着180年伊贺烧历史的窑厂。...",
        "price": 0.00,
        "readCount": "33.3k",
        "picUrl": "https://yanxuan.nosdn.127.net/14920623353130483.jpg"
      },
      {
        "id": 271,
        "title": "选式新懒人",
        "subtitle": "懒出格调，懒出好生活。",
        "price": 15.00,
        "readCount": "57.7k",
        "picUrl": "https://yanxuan.nosdn.127.net/14924199099661697.jpg"
      }
    ],
    "floorGoodsList": [
      {
        "name": "居家",
        "goodsList": [
          {
            "id": 1110016,
            "name": "天然硅胶宠物除毛按摩刷",
            "brief": "顺滑平面，猫狗通用，去除死毛",
            "picUrl": "http://yanxuan.nosdn.127.net/3bd73b7279a83d1cbb50c0e45778e6d6.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 59.00,
            "retailPrice": 39.00
          },
          {
            "id": 1110017,
            "name": "耐用材料猫咪护理清洁套装",
            "brief": "精致钢材，美容清洁",
            "picUrl": "http://yanxuan.nosdn.127.net/534231583f82572398ec84bad425cdaf.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 99.00,
            "retailPrice": 79.00
          },
          {
            "id": 1110018,
            "name": "耐用狗狗清洁美容护理套装",
            "brief": "精致钢材，耐咬美容",
            "picUrl": "http://yanxuan.nosdn.127.net/d93aa5d6e7a296101cf4cb72613aeda6.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 99.00,
            "retailPrice": 79.00
          },
          {
            "id": 1110019,
            "name": "宠物合金钢安全除菌指甲护理组合",
            "brief": "猫狗皆可用，保护家具",
            "picUrl": "http://yanxuan.nosdn.127.net/1e7e392b6fc9da99dc112197b7444eec.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 89.00,
            "retailPrice": 69.00
          }
        ],
        "id": 1005000
      },
      {
        "name": "餐厨",
        "goodsList": [
          {
            "id": 1023003,
            "name": "100年传世珐琅锅 全家系列",
            "brief": "特质铸铁，大容量全家共享",
            "picUrl": "http://yanxuan.nosdn.127.net/c39d54c06a71b4b61b6092a0d31f2335.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 418.00,
            "retailPrice": 398.00
          },
          {
            "id": 1073008,
            "name": "铸铁珐琅牛排煎锅",
            "brief": "沥油隔水，煎出外焦里嫩",
            "picUrl": "http://yanxuan.nosdn.127.net/619e46411ccd62e5c0f16692ee1a85a0.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 169.00,
            "retailPrice": 149.00
          },
          {
            "id": 1051000,
            "name": "Carat钻石炒锅30cm",
            "brief": "安全涂层，轻便无烟",
            "picUrl": "http://yanxuan.nosdn.127.net/e564410546a11ddceb5a82bfce8da43d.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 200.00,
            "retailPrice": 180.00
          },
          {
            "id": 1051001,
            "name": "Carat钻石煎锅28cm",
            "brief": "耐磨涂层，导热迅速",
            "picUrl": "http://yanxuan.nosdn.127.net/f53ed57d9e23fda7e24dfd0e0a50c5d1.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 179.00,
            "retailPrice": 159.00
          }
        ],
        "id": 1005001
      },
      {
        "name": "饮食",
        "goodsList": [
          {
            "id": 1045000,
            "name": "绿茶蛋黄酥 200克/4枚入",
            "brief": "香甜茶食，果腹优选",
            "picUrl": "http://yanxuan.nosdn.127.net/b2adc3fd9b84a289a1be03e8ee400e61.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 48.00,
            "retailPrice": 28.00
          },
          {
            "id": 1116011,
            "name": "蔓越莓曲奇 200克",
            "brief": "酥脆奶香，甜酸回味",
            "picUrl": "http://yanxuan.nosdn.127.net/767b370d07f3973500db54900bcbd2a7.png",
            "isNew": true,
            "isHot": true,
            "counterPrice": 56.00,
            "retailPrice": 36.00
          },
          {
            "id": 1070000,
            "name": "星云酥 180克/3颗",
            "brief": "酥饼界的小仙女",
            "picUrl": "http://yanxuan.nosdn.127.net/8392725765cdd57fdae3f173877f4bda.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 46.00,
            "retailPrice": 26.00
          },
          {
            "id": 1155015,
            "name": "绿豆糕 80克（4枚入）",
            "brief": "细腻松软，入口绵柔",
            "picUrl": "http://yanxuan.nosdn.127.net/66b9f1638c0517d179262f14ed1345f9.png",
            "isNew": true,
            "isHot": false,
            "counterPrice": 32.90,
            "retailPrice": 12.90
          }
        ],
        "id": 1005002
      },
      {
        "name": "配件",
        "goodsList": [
          {
            "id": 1085019,
            "name": "20寸 纯PC“铝框”（非全铝）登机箱",
            "brief": "铝质包角，牢固抗摔",
            "picUrl": "http://yanxuan.nosdn.127.net/65c955a7a98e84d44ca30bb88a591eac.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 369.00,
            "retailPrice": 349.00
          },
          {
            "id": 1086052,
            "name": "20寸 铝镁合金登机箱",
            "brief": "时尚金属箱，奢品质感",
            "picUrl": "http://yanxuan.nosdn.127.net/93171a281c4ed272c007a050816e6f6c.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 879.00,
            "retailPrice": 859.00
          },
          {
            "id": 1152101,
            "name": "魔兽世界 部落 奥格瑞玛 拉杆箱 可登机",
            "brief": "18寸，可携带登机",
            "picUrl": "http://yanxuan.nosdn.127.net/c1c62211a17b71a634fa0c705d11fb42.png",
            "isNew": false,
            "isHot": true,
            "counterPrice": 908.00,
            "retailPrice": 888.00
          },
          {
            "id": 1114011,
            "name": "104升 纯PC拉链斜纹拉杆箱",
            "brief": "104升的体积，90升的价格",
            "picUrl": "http://yanxuan.nosdn.127.net/196b5ce11930b4eadaec563cb0406634.png",
            "isNew": false,
            "isHot": false,
            "counterPrice": 319.00,
            "retailPrice": 299.00
          }
        ],
        "id": 1008000
      }
    ]
  },
  "errmsg": "成功"
}
