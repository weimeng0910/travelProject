export interface IMenuNode {
  id: number;
  label: string;
  key: string;

}
export interface ISideMenu {
  MenuId: number;
  title: string;
  path: string;
  icon: string,
  MenuLink: null,
  hidden: boolean,
  children: [];

}
export interface IGoodsData {
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
  pic01_url: string;
  pic02_url: string;
  Comments: string;
  is_new: boolean;
  is_hot: boolean;
  is_heartbeat: boolean;
  Kommentar: number;
  retail_price: number;
  counter_price: number;
  add_time: string;
  update_tiem: string;
  deleted_tiem: string;
  detail: string;
}
export interface IBanner {
  id: number;
  name: string;
  goods_sn: number;
  brief: string;
  is_on_sale: boolean;
  sort_order: number;
  pic_url: string;
  pic01_url: string;
  pic02_url: string;
  Comments: string;
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

export interface INewGoods {
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
  pic01_url: string;
  pic02_url: string;
  Comments: string;
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

export interface ICoupon {
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
  pic01_url: string;
  pic02_url: string;
  Comments: string;
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

export interface IChannel {
  id: number;
  name: string;
  iconUrl: string;
}

export interface IGroupon {
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
  pic01_url: string;
  pic02_url: string;
  Comments: string;
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

export interface IBrand {
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
  pic01_url: string;
  pic02_url: string;
  Comments: string;
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

export interface IHotGoods {
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
  pic01_url: string;
  pic02_url: string;
  Comments: string;
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

export interface ITopic {
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
  pic01_url: string;
  pic02_url: string;
  Comments: string;
  is_new: boolean;
  is_hot: boolean;
  is_heartbeat: boolean;
  Kommentar: number;
  retail_price: number;
  counter_price: number;
  add_time: string;
  update_tiem: string;
  deleted_tiem: string;
  detail: string;
}

export interface IFloorGoods {
  name: string;
  goodsList: {
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
    pic01_url: string;
    pic02_url: string;
    Comments: string;
    is_new: boolean;
    is_hot: boolean;
    is_heartbeat: boolean;
    Kommentar: number;
    retail_price: number;
    counter_price: number;
    add_time: string;
    update_tiem: string;
    deleted_tiem: string;
    detail: string;
  }[];
}

export interface IData {
  banner: IBanner[];
  newGoodsList: INewGoods[];
  couponList: ICoupon[];
  channel: IChannel[];
  grouponList: IGroupon[];
  brandList: IBrand[];
  hotGoodsList: IHotGoods[];
  topicList: ITopic[];
  floorGoodsList: IFloorGoods[];
}

export interface IRootObject {
  errno: number;
  data: IData;
}
