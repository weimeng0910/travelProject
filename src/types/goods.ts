export interface Goods {
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
  retail_price: number;
  counter_price: number;
  add_time: string;
  update_tiem: string;
  deleted_tiem: string;
  detail: string;
}