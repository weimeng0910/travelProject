/*
 * @Date: 2023-12-11 12:03:25
 * @Description: useEffectOnce test
 */
import { renderHook, act } from '@testing-library/react';
import useEffectOnce from '../common/hooks/useMount/useMount';

describe('Test useEffectOnce', () => {
  const mockEffect = jest.fn();
  it('useEffectOnce runs effect once on mount', () => {

    act(() => {
      const { result } = renderHook(() => useEffectOnce(mockEffect));
      result.current;
    })
    //Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.
    expect(mockEffect).toHaveBeenCalledTimes(1);
  })
});
