/*
 * @Date: 2023-12-11 12:00:32
 * @Description: http test
 */
import { renderHook, act } from '@testing-library/react';
import { useHttp } from '@/api';

import fetchMock from 'jest-fetch-mock';
fetchMock.enableMocks();
describe('useHttp', () => {
  beforeEach(() => {
    //在 beforeEach 函数中调用了 fetchMock.resetMocks() 来重置模拟，
    //使用 fetchMock.resetMocks() 重置了所有的 mock
    fetchMock.resetMocks();
  });

  it('should make a GET request with correct URL and configuration', async () => {
    //然后调用 fetchMock.mockResponse 来设置期望的响应结果
    fetchMock.mockResponseOnce(JSON.stringify({ data: '12345' }));
    const { result } = renderHook(() => useHttp());
    const http = result.current;

    // Mock the response for the GET request

    await act(async () => {
      await http('Goods');
    });
    if (fetchMock.mock && fetchMock.mock.calls) {
      // Your assertions here
      expect(fetchMock.mock.calls[0][0]).toBe('http://localhost:4000/Goods');
      expect(fetchMock.mock.calls[0][1]).toEqual({
        method: 'GET',
        headers: { 'Content-Type': '' },
      });
    }
    // Assert that the fetch function was called with the correct arguments
  });
});
