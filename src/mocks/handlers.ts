import { rest } from 'msw';
import { bootstrap } from './bootstrap';
import { getMenuHandlers, getSideMenuHandlers, getBannerGoodsHandlers } from './domains';
/** 
* @data 24.05.2023
* @file Respond to API requests
*/

//init data
bootstrap();

export const handlers = [

  //get requests
  rest.get('/hello', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  }),
  ...getMenuHandlers,
  ...getSideMenuHandlers,
  ...getBannerGoodsHandlers
]