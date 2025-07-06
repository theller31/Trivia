import { render, screen, fireEvent } from '@testing-library/react';
import Result from '../src/components/Result';

describe('Result Component', () => {
  test('shows correct answer when wrong', () => {
    const mockRestart = jest.fn();
    render(
      <Result
        name="Jane"
        isCorrect={false}
        correctAnswer="Paris"
        onRestart={mockRestart}
      />
    );
    expect(screen.getByText(/Paris/)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /play again/i }));
    expect(mockRestart).toHaveBeenCalled();
  });
});
