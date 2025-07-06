import React from 'react';
import PropTypes from 'prop-types';

export default function Result({ name, isCorrect, correctAnswer, onRestart }) {
  return (
    <div className="container">
      {isCorrect ? (
        <h2>🎉 Well done, {name}! You answered correctly.</h2>
      ) : (
        <>
          <h2>Nice try, {name}! 😅</h2>
          <p>The correct answer was: <strong>{correctAnswer}</strong></p>
        </>
      )}
      <button onClick={onRestart}>Play Again</button>
    </div>
  );
}

Result.propTypes = {
  name: PropTypes.string.isRequired,
  isCorrect: PropTypes.bool.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  onRestart: PropTypes.func.isRequired
};
