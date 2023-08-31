import { rest } from 'msw';
import { API_URL, bannerGoodsDB } from '@/config';
import * as db from '../data/bannerGoodsDB';
/**
 *  @date 06.06.2023
 *  @description get menu data
 */

export const getBannerGoodsHandlers = [

  rest.get(`${API_URL}/banner`, async (_req, res, ctx) => {
    //调用写入数据的函数
    const bannerGoodsData = await db.bannerGoodsDB(bannerGoodsDB);
    if (bannerGoodsData) {
      return res(
        //延迟两秒返回数据
        //ctx.delay(6000),
        ctx.status(200),
        ctx.json(bannerGoodsData)
      );
    }
    return res(ctx.status(500));

  }),
];