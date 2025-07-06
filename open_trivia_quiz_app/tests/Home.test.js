import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../src/components/Home';

describe('Home Component', () => {
  test('shows validation error if fields are empty', () => {
    const mockStart = jest.fn();
    render(<Home onStart={mockStart} />);
    fireEvent.click(screen.getByRole('button', { name: /start quiz/i }));
    expect(screen.getByText(/please fill out every field/i)).toBeInTheDocument();
    expect(mockStart).not.toHaveBeenCalled();
  });
});
