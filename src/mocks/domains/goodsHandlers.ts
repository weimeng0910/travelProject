/*
 * @Date: 2023-09-04 09:46:46
 * @Description: Do not edit
 */
import { rest } from 'msw';
import { API_URL, GoodsDB } from '@/common/constants/config';
import * as db from '../data/goodsDB';
import { IGoodsData } from '../types'
/**
 *  @date 06.06.2023
 *  @description get menu data
 */

export const getGoodsHandlers = [

  /**
   * @todo Respond to GET request to obtain product 
   */

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

  /**
   * @todo Request product based on id
   */
  rest.get<Partial<IGoodsData>>(`${API_URL}/goods/:id`, async (req, res, ctx) => {

    const { id } = req.params;
    const goodsData = await db.filterGoodsById(GoodsDB, id as string);
    return res(
      //延迟
      //ctx.delay(1000 * 60),
      ctx.json(goodsData)
    );
  }),
];