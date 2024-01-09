import { rest } from 'msw';
import { API_URL, menuDB } from '@/common/constants/config';
import * as db from '../data/menuDb';
/**
 *  @date 06.06.2023
 *  @description get menu data
 */
export const getMenuHandlers = [

  rest.get(`${API_URL}/menu`, async (_req, res, ctx) => {
    //调用写入数据的函数
    const menuList = await db.menulist(menuDB);
    if (menuList) {
      return res(
        //延迟两秒返回数据
        //ctx.delay(6000),
        ctx.status(200),
        ctx.json(menuList)
      );
    }
    return res(ctx.status(500));

  }),
];