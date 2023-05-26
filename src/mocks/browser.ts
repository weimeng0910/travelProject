import { setupWorker } from 'msw';

import { handlers } from './handlers';
/** 
* @data 24.05.2023
* @file  browser:init Service Worker
*/
// This configures a Service Worker with the given request handlers.
export const mocker = setupWorker(...handlers);