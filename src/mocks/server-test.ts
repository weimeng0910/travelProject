import { setupServer } from 'msw/node'
import { handlers } from './handlers'
/** 
* @data 24.05.2023
* @file Server request simulation
*/
const server = setupServer(...handlers);

export * from 'msw';
export { server };