export interface MenuNode {
  id: number;
  label: string;
  key: string;

}
export interface SideMenu {
  MenuId: number;
  title: string;
  path: string;
  icon: string,
  MenuLink: null,
  hidden: boolean,
  children: [];

}
export interface GoodsData {
  id: number;
  goods_sn: number;
  name: string;
  category_id: number;
  brand_id: number;
  keywords: string;
  brief: string;
  is_on_sale: boolean;
  sort_order: number;
  pic_url: string;
  is_new: boolean;
  is_hot: boolean;
  Kommentar: number;
  retail_price: number;
  counter_price: number;
  add_time: string;
  update_tiem: string;
  deleted_tiem: string;
  detail: string;
}
export interface Banner {
  id: number;
  name: string;
  goods_sn: number;
  brief: string;
  is_on_sale: boolean;
  sort_order: number;
  pic_url: string;
  is_new: boolean;
  is_hot: boolean;
  Kommentar: number;
  retail_price: number;
  counter_price: number;
  add_time: string;
  update_tiem: string;
  deleted_tiem: string;
  detail: string;
}

export interface NewGoods {
  id: number;
  name: string;
  goods_sn: number;
  category_id: number;
  brand_id: number;
  keywords: string;
  brief: string;
  is_on_sale: boolean;
  sort_order: number;
  pic_url: string;
  is_new: boolean;
  is_hot: boolean;
  retail_price: number;
  counter_price: number;
  add_time: string;
  update_tiem: string;
  deleted_tiem: string;
  detail: string;
}

export interface Coupon {
  id: number;
  name: string;
  desc: string;
  tag: string;
  discount: number;
  min: number;
  days: number;
}

export interface Channel {
  id: number;
  name: string;
  iconUrl: string;
}

export interface Groupon {
  id: number;
  name: string;
  brief: string;
  picUrl: string;
  counterPrice: number;
  retailPrice: number;
  grouponPrice: number;
  grouponDiscount: number;
  grouponMember: number;
}

export interface Brand {
  id: number;
  name: string;
  desc: string;
  picUrl: string;
  floorPrice: number;
}

export interface HotGoods {
  id: number;
  name: string;
  brief: string;
  picUrl: string;
  isNew: boolean;
  isHot: boolean;
  counterPrice: number;
  retailPrice: number;
}

export interface Topic {
  id: number;
  title: string;
  subtitle: string;
  price: number;
  readCount: string;
  picUrl: string;
}

export interface FloorGoods {
  name: string;
  goodsList: {
    id: number;
    name: string;
    brief: string;
    picUrl: string;
    isNew: boolean;
    isHot: boolean;
    counterPrice: number;
    retailPrice: number;
  }[];
}

export interface Data {
  banner: Banner[];
  newGoodsList: NewGoods[];
  couponList: Coupon[];
  channel: Channel[];
  grouponList: Groupon[];
  brandList: Brand[];
  hotGoodsList: HotGoods[];
  topicList: Topic[];
  floorGoodsList: FloorGoods[];
}

export interface RootObject {
  errno: number;
  data: Data;
}
