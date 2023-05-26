import { setupServer, SetupServer } from 'msw/node';
import { handlers } from './handlers';
/** 
* @data 24.05.2023
* @file Server request simulation
*/
export const server = setupServer(...handlers);