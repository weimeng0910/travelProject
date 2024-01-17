/*
 * @Date: 2023-09-04 09:40:26
 * @Description: GoodsDB
 */
import { IRootObject, IData, IBanner, INewGoods, ICoupon, IChannel, IGroupon, IBrand, IHotGoods, ITopic, IFloorGoods, IGoodsData } from '../types';
import { loadList } from '../utils';

/**
 *  @function ScreensGoodsData
 *  @param storageKey
 *  @description response data
 *  @date 31.08.2023
 */

export const goodsDB = async (storageKey: string) => {
  const goodsDB: Partial<IGoodsData>[] = loadList(storageKey);
  return goodsDB;

}
/**
 *  @function ScreensGoodsData
 *  @param storageKey
 *  @description response data
 *  @date 31.08.2023
 */
export async function ScreensGoodsData(storageKey: string, query: { id: string, name: string }) {

  const goodsDB = loadList(storageKey);
  const goodsList: Partial<IGoodsData>[] = [];
  if (query.id) {
    const reault = goodsDB.filter((item: Partial<IGoodsData>) => item.id === Number.parseInt(query.id!, 10))!;
    reault.map((item: Partial<IGoodsData>) => goodsList.push(item))
  } if (query.name) {
    const result = goodsDB.filter((item: Partial<IGoodsData>) => item.name?.includes(query.name!));
    result.map((item: Partial<IGoodsData>) => goodsList.push(item));
  }
  const obj: { [key: string]: boolean; } = {};//定义一个空对象

  const list = goodsList.reduce<Partial<IGoodsData>[]>((item, next) => {
    if (!obj[next.id!]) {
      item.push(next);
      obj[next.id!] = true;
    }
    return item;
  }, []);
  return list.length > 0 ? list : goodsList;
};



/**
 *  @function ScreensGoodsIdData
 *  @param storageKey
 *  @description Respond to id request
 */
// Helper function to flatten floorGoodsList
function flattenFloorGoods(floorGoodsList: IFloorGoods[]): IGoodsData[] {
  return floorGoodsList.reduce((acc, curr) => [...acc, ...curr.goodsList], [] as IGoodsData[]);
}

export async function filterGoodsById(storageKey: string, id: string) {

  try {
    const goodsDB: IRootObject = await loadList(storageKey);
    if (!goodsDB || !goodsDB.data) {
      throw new Error(`Invalid goods database for storage key: ${storageKey}`);
    }
    const { data } = goodsDB;
    const goodsData = [
      ...data.banner,
      ...data.newGoodsList,
      ...data.couponList,
      ...data.channel,
      ...data.grouponList,
      ...data.brandList,
      ...data.hotGoodsList,
      ...data.topicList,
      ...flattenFloorGoods(data.floorGoodsList),
    ].find(item => ('id' in item) && item.id === Number(id));
    if (goodsData) {
      return goodsData as IGoodsData;
    } else {
      throw new Error(`No matching product information found for id: ${id}`);
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    return undefined;
  }
}