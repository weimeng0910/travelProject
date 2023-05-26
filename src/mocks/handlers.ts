import { rest } from 'msw';
/** 
* @data 24.05.2023
* @file Respond to API requests
*/
export const handlers = [

  //get requests
  rest.get('/hello', (req, res, ctx) => {
    return res(ctx.json({ greeting: 'hello there' }))
  })

]