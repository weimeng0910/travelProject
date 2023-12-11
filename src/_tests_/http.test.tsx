/*
 * @Date: 2023-12-11 12:00:32
 * @Description: http test
 */
import { renderHook, act } from '@testing-library/react';
import { useHttp } from '@/api';

import fetchMock from 'jest-fetch-mock';

describe('useHttp', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should make a GET request with correct URL and configuration', async () => {
    const { result } = renderHook(() => useHttp());
    const http = result.current;

    // Mock the response for the GET request
    fetchMock.mockResponseOnce(JSON.stringify({ data: 'mocked data' }));

    await act(async () => {
      await http('/goods');
    });

    // Assert that the fetch function was called with the correct arguments
    expect(fetchMock.mock.calls[0][0]).toBe('/goods');
    expect(fetchMock.mock.calls[0][1]).toEqual({
      method: 'GET',
      headers: { 'Content-Type': '' },
    });

    // Perform additional assertions based on the expected behavior of your useHttp hook
  });

  // Add more tests for different scenarios (e.g., POST requests, error handling, etc.)
});
