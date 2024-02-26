/*
 * @Date: 2024-01-25 09:35:33
 * @Description: Do not edit
 */
import { act, renderHook, waitFor, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { useUrlQueryParam, useSetUrlSearchParam } from '@/common/hooks/useUrlQueryParam';

describe('useSetUrlSearchParam', () => {
  let wrapper: React.FC;

  beforeEach(() => {
    /**
     * <MemoryRouter>` 是 `react-router-dom` 提供的组件，可以在内存环境中测试路由行为。
     * 它不会更改实际的浏览器 URL，但允许您在测试环境中模拟路由
     * “MemoryRouter”的“initialEntries”属性用于在渲染“MemoryRouter”时设置初始 URL 条目
     */

    wrapper = ({ children }: { children?: React.ReactNode }) => (
      <MemoryRouter initialEntries={['/test?name=value1&id=value2']}>{children}</MemoryRouter>
    );
  });

  afterEach(() => {
    cleanup();
  });

  it('should update search parameters correctly', async () => {
    /**
     * 渲染钩子：
     * useSetUrlSearchParam使用renderHookfrom渲染钩子@testing-library/react。
     * 使用具有定义的包装器MemoryRouter。
     */
    const { result } = renderHook(() => useSetUrlSearchParam(), { wrapper });
    /**
     * 更新搜索参数：
     * 调用useSetUrlSearchParam挂钩，传递带有名称-值对的对象。
     * 用于act确保异步更新完成。
     * 用于waitFor等待任何异步更新。
     */
    await act(async () => {
      result.current({ name: 'value1', id: 'value2' });

      await waitFor(() => {}); // Ensure any asynchronous updates are completed
    });
    console.log('Current window.location.search:', window.location.search);
    //断言window.location.search等于预期的查询参数。
    expect(window.location.search).toBe('?name=value1&id=value2');
  });
});
describe('useUrlQueryParam', () => {
  let wrapper: React.FC;

  beforeEach(() => {
    wrapper = ({ children }: { children?: React.ReactNode }) => (
      <MemoryRouter initialEntries={['/test?key1=value1&key2=value2']}>{children}</MemoryRouter>
    );
  });
  /**
   * 用于在测试之间清理任何已安装的组件。这确保了每个测试都是隔离的，
   * 并且不会对之前的测试产生任何副作用。
   * 该cleanup函数卸载测试期间安装的所有 React 组件，防止内存泄漏和意外行为。
   */
  afterEach(() => {
    cleanup();
  });

  it('should filter and update URL parameters correctly', async () => {
    const { result, rerender } = renderHook(() => useUrlQueryParam(['key1', 'key2']), { wrapper });
    //断言挂钩的初始结果与带有查询参数的预期对象匹配。
    expect(result.current[0]).toEqual({ key1: 'value1', key2: 'value2' });
    //调用rerender以触发挂钩更新。使用act和waitFor确保完成所有异步更新。
    await act(async () => {
      rerender(); // Rerender to trigger the hook updates
      await waitFor(() => {}); // Ensure any asynchronous updates are completed
    });

    const updatedResult = result.current[0];
    //断言挂钩的更新结果反映了查询参数的更改。
    expect(updatedResult.key1).toBe('value1');
    expect(updatedResult.key2).toBe('value2');
  });
});
