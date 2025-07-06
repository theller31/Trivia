import { render, screen, fireEvent } from '@testing-library/react';
import Quiz from '../src/components/Quiz';

jest.mock('../src/api', () => ({
  fetchQuestion: jest.fn(() =>
    Promise.resolve({
      question: '2 + 2 = ?',
      correctAnswer: '4',
      answers: ['1', '2', '3', '4']
    })
  )
}));

describe('Quiz Component', () => {
  test('validates answer required', async () => {
    const mockSubmit = jest.fn();
    render(<Quiz options={{ category: '9', difficulty: 'easy' }} onSubmit={mockSubmit} />);
    // wait for question to load
    expect(await screen.findByText(/2 \+ 2/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /submit answer/i }));
    expect(screen.getByText(/must choose an answer/i)).toBeInTheDocument();
    expect(mockSubmit).not.toHaveBeenCalled();
  });
});
