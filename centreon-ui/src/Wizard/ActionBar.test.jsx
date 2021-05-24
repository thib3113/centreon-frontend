import * as React from 'react';
import { render, fireEvent, act } from '@testing-library/react';
import ActionBar from './ActionBar';

const mockFn = jest.fn();

describe('ActionBar', () => {
  it('cancels', () => {
    const mockCancel = jest.fn();

    const { getByText } = render(
      <ActionBar labelCancel="Exit" onCancel={mockCancel} />,
    );

    act(() => {
      fireEvent.click(getByText('Exit').parentNode);
    });

    expect(mockCancel).toBeCalled();
  });

  it('cannot finish if form is not valid', () => {
    const { getByText } = render(<ActionBar disabledNext />);

    expect(getByText('Finish').parentNode).toHaveAttribute('disabled');
  });

  it('displays the given previous and next labels when the current page is not the last one', () => {
    const { getByText } = render(
      <ActionBar
        isLastPage={false}
        labelNext="Custom next"
        labelPrevious="Custom previous"
        page={1}
      />,
    );

    expect(getByText('Custom previous')).toBeInTheDocument();
    expect(getByText('Custom next')).toBeInTheDocument();
  });

  it('displays the given previous and finish labels when the current page is the last one', () => {
    const { getByText } = render(
      <ActionBar
        isLastPage
        labelFinish="Custom finish"
        labelPrevious="Custom previous"
        page={1}
      />,
    );

    expect(getByText('Custom previous')).toBeInTheDocument();
    expect(getByText('Custom finish')).toBeInTheDocument();
  });

  it('displays custom cancel button label when wizard can be canceled', () => {
    const { getByText } = render(
      <ActionBar labelCancel="Custom cancel" onCancel={mockFn} />,
    );

    expect(getByText('Custom cancel')).toBeInTheDocument();
  });
});
