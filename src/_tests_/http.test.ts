import { setupServer } from "msw/node";
import { rest } from "msw";
import { http } from '@/api';
import { API_URL } from '@/common/constants/config';


const server = setupServer();