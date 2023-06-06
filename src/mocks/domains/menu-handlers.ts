import { rest } from 'msw';
import { API_URL, menuDB } from '@/config';
import * as db from '../data/menu-db';
/**
 *  @date 06.06.2023
 *  @description get menu data
 */
export const getMenuHandlers = [

  rest.get(`${API_URL}/menu`, async (_req, res, ctx) => {
    //调用写入数据的函数
    const projectData = await db.menulist(menuDB);
    if (projectData) {
      return res(
        //延迟两秒返回数据
        //ctx.delay(6000),
        ctx.status(200),
        ctx.json(projectData)
      );
    }
    return res(ctx.status(500));

  }),
];