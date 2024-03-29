export interface IGoods {
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
  is_heartbeat: boolean;
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
  name: string;
  desc: string;
  tag: string;
  discount: number;
  min: number;
  days: number;
}

export interface IChannel {
  id: number;
  name: string;
  iconUrl: string;
}

export interface IGroupon {
  id: number;
  name: string;
  brief: string;
  picUrl: string;
  pic01_url: string;
  pic02_url: string;
  Comments: string;
  counterPrice: number;
  retailPrice: number;
  grouponPrice: number;
  grouponDiscount: number;
  grouponMember: number;
}

export interface IBrand {
  id: number;
  name: string;
  desc: string;
  pic_url: string;
  pic01_url: string;
  pic02_url: string;
  Comments: string;
  floorPrice: number;
  is_new: boolean;
  is_hot: boolean;
  is_heartbeat: boolean;
  Kommentar: number;
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
  name: string;
  subtitle: string;
  price: number;
  readCount: string;
  pic_url: string;
  pic01_url: string;
  pic02_url: string;
  Comments: string;
  is_top: boolean;
  is_hot: boolean;
  is_heartbeat: boolean;
  retail_price: number;
  counter_price: number;
  goods_sn: number;

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
  newGoodsList: IGoods[];
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