import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchQuestion } from '../api';

export default function Quiz({ options, onSubmit }) {
  const [questionData, setQuestionData] = useState(null);
  const [selected, setSelected] = useState('');
  const [error, setError] = useState('');
  const [apiError, setApiError] = useState('');

  useEffect(() => {
    let mounted = true;
    fetchQuestion(options)
      .then(data => {
        if (mounted) setQuestionData(data);
      })
      .catch(err => {
        console.error(err);
        setApiError('Failed to fetch question. Please try again.');
      });
    return () => { mounted = false; };
  }, [options]);

  if (apiError) {
    return <div className="container"><p className="error">{apiError}</p></div>;
  }
  if (!questionData) {
    return <div className="container"><p>Loading…</p></div>;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!selected) {
      setError('You must choose an answer.');
      return;
    }
    setError('');
    onSubmit(selected === questionData.correctAnswer, questionData.correctAnswer);
  }

  return (
    <div className="container">
      <h2>Question</h2>
      <p>{questionData.question}</p>

      <form onSubmit={handleSubmit}>
        {questionData.answers.map(a => (
          <label key={a} style={{ display: 'block', margin: '0.5rem 0' }}>
            <input
              type="radio"
              name="answer"
              value={a}
              checked={selected === a}
              onChange={() => setSelected(a)}
            />{' '}
            {a}
          </label>
        ))}

        {error && <p className="error">{error}</p>}

        <button type="submit">Submit Answer</button>
      </form>
    </div>
  );
}

Quiz.propTypes = {
  options: PropTypes.shape({
    category: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired
  }).isRequired,
  onSubmit: PropTypes.func.isRequired
};
