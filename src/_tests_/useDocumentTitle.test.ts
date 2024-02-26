/*
 * @Date: 2024-01-18 12:25:47
 * @Description: useDocumentTitle test
 */
import { act, renderHook } from '@testing-library/react';
import { useDocumentTitle } from '@/common/hooks/useDocumentTitle';
// Mock document.title
//模拟文档标题
let originalDocumentTitle: string;
describe('useDocumentTitle', () => {
  beforeEach(() => {
    // Store the original document title before each test
    //每次测试前存储原始文档标题
    originalDocumentTitle = document.title;
  });

  afterEach(() => {
    // Restore the original document title after each test
    //每次测试后恢复原始文档标题;
    document.title = originalDocumentTitle;
  });

  it('updates the document title', () => {
    //渲染一个测试组件，该组件将callback在每次渲染时调用提供的，包括它调用的任何钩子
    renderHook(() => useDocumentTitle('Test Title'));
    //断言useDocumentTitle通过将文档标题更新为指定值。
    expect(document.title).toBe('Test Title');
  });

  it('restores the original document title on unmount', () => {
    const { unmount } = renderHook(() => useDocumentTitle('Test Title', false));
    //该act函数用于包装执行更新以及与 React 组件交互的代码。目的act是确保 React 可以批量更新并以类似于应用程序正常执行期间的方式处理它们。
    //这里用来卸载，通过将调用unmount包装在 中act，您可以确保 React 正确处理因卸载组件而引起的任何副作用
    act(() => {
      unmount();
    });
    expect(document.title).toBe(originalDocumentTitle);
  });

  it('resets to original title on unmount with default behavior', () => {
    // Set an initial title
    renderHook(() => useDocumentTitle('Initial Title'));

    // Update the title
    renderHook(() => useDocumentTitle('Test Title'));

    // Verify the title is updated
    expect(document.title).toBe('Test Title');

    // Unmount the component
    act(() => {
      //将文档标题设置回原始值
      renderHook(() => useDocumentTitle(originalDocumentTitle));
    });

    // Verify that the title is reset to the original value after unmount
    expect(document.title).toBe(originalDocumentTitle);
  });
});
