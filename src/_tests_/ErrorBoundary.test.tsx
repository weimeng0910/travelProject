/*
 * @Date: 2023-12-21 15:40:33
 * @Description: ErrorBoundary  test
 */
import { render } from '@testing-library/react';
import { ErrorBoundary } from '@/common/hooks/errorBoundary';

// A component that throws an error
//定义一个错误时抛出的组件
const ErrorThrowingComponent = () => {
  throw new Error('test error');
};

//A fallback component to render when an error cocurs
//定义一个正确时渲染的组件
const FallbackComponent = () => <div>Fallback UI</div>;

describe('ErrorBoundary', () => {
  it('renders "Something went wrong." when an error is thrown', () => {
    const { getByText } = render(
      <ErrorBoundary fallbackRender={() => <FallbackComponent />}>
        {/* 使用故意引发错误的ErrorBoundary子组件 ( ) 来渲染该组件。 */}
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );
    expect(getByText('Fallback UI')).toBeInTheDocument();
  });
});
