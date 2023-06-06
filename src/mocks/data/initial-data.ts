/** 
* @date 06.06.2023
* @file  data
*/
export interface MenuNode {

  name: string;

}
export const menu: Array<MenuNode> = [
  {
    name: "home",
  },
  {
    name: "Review",

  },
  {
    name: "Trips",
  },
  {
    name: "Sitemap",
  },
  {
    name: "Cart",
  },
];

[
  {
    "value": "zhejiang",
    "label": "浙江",
    "children": [
      {
        "value": "hangzhou",
        "label": "杭州",
        "title": "数据待接入",
        "children": [
          {
            "value": "xihu",
            "label": "西湖",
            "title": "数据待接入"
          }
        ]
      }
    ]
  },
  {
    "value": "jiangsu",
    "label": "江苏",
    "children": [
      {
        "value": "nanjing",
        "label": "南京",
        "disabled": true,
        "children": [
          {
            "value": "zhonghuamen",
            "label": "中华门",
            "disabled": true
          }
        ]
      }
    ]
  }
]