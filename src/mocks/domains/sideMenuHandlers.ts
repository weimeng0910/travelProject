import { rest } from 'msw';
import { API_URL, sideMenuDB } from '@/common/constants/config';
import * as db from '../data/sideMenuDb';
/**
 *  @date 05.07.2023
 *  @description get sidemenu data
 */
export const getSideMenuHandlers = [

  rest.get(`${API_URL}/sideMenu`, async (_req, res, ctx) => {
    //调用写入数据的函数
    const sideMenuData = await db.sideMenulist(sideMenuDB);
    if (sideMenuData) {
      return res(
        //延迟两秒返回数据
        //ctx.delay(6000),
        ctx.status(200),
        ctx.json(sideMenuData)
      );
    }
    return res(ctx.status(500));

  }),
];