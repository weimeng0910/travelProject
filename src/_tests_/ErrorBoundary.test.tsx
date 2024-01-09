/*
 * @Date: 2023-12-21 15:40:33
 * @Description: ErrorBoundary  test
 */
import { render } from '@testing-library/react';
import { ErrorBoundary } from '@/common/hooks/errorBoundary';

// A component that throws an error
const ErrorThrowingComponent = () => {
  throw new Error('test error');
};
//A fallback component to render when an error cocurs
const FallbackComponent = () => <div>Fallback UI</div>;
describe('ErrorBoundary', () => {
  it('renders fallback UI when an error occurs', () => {
    const { getByText } = render(
      <ErrorBoundary fallbackRender={() => <FallbackComponent />}>
        <ErrorThrowingComponent />
      </ErrorBoundary>
    );

    expect(getByText('Fallback UI')).toBeInTheDocument();
  });
});
