/** 
* @date 06.06.2023
* @file  data
*/
export interface MenuNode {
  id: number;
  label: string;
  key: string;

}
export const menu: Array<MenuNode> = [
  {
    id: 1,
    label: "home",
    key: "1"
  },
  {
    id: 2,
    label: "Review",
    key: "2"

  },
  {
    id: 3,
    label: "Trips",
    key: "3"
  },
  {
    id: 4,
    label: "Sitemap",
    key: "4"
  },
  {
    id: 5,
    label: "Cart",
    key: "5"
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