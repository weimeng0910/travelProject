import { setupServer } from "msw/node";
import { rest } from "msw";
import { http } from '@/api';
import { API_URL } from '@/common/constants/config';


const server = setupServer();
//Start server listening at the beginning of the test
beforeAll(() => server.listen());
// After each test is run, the mock routing is reset.
afterEach(() => server.resetHandlers());
// Test complete close Mock
afterAll(() => server.close());

test("http Method to send asynchronous request", async () => {
  const endpoint = "test-endpoint";
  const mockResult = { mockValue: "mock" };

  server.use(
    rest.get(`${API_URL}/${endpoint}`, (req, res, ctx) =>
      res(ctx.json(mockResult))
    )
  );

  const result = await http(endpoint);
  expect(result).toEqual(mockResult);
});