import { rest } from 'msw';
import { API_URL, GoodsDB } from '@/config';
import * as db from '../data/goodsDB';
/**
 *  @date 06.06.2023
 *  @description get menu data
 */

export const getGoodsHandlers = [

  rest.get(`${API_URL}/goods`, async (_req, res, ctx) => {
    //调用写入数据的函数
    const GoodsData = await db.goodsDB(GoodsDB);
    if (GoodsData) {
      return res(
        //延迟两秒返回数据
        //ctx.delay(6000),
        ctx.status(200),
        ctx.json(GoodsData)
      );
    }
    return res(ctx.status(500));

  }),
];