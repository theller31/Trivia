import React, { useState } from 'react';
import PropTypes from 'prop-types';

const categories = [
  { id: 9, name: 'General Knowledge' },
  { id: 18, name: 'Computers' },
  { id: 17, name: 'Science & Nature' },
  { id: 21, name: 'Sports' }
];

const difficulties = ['easy', 'medium', 'hard'];

export default function Home({ onStart }) {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    difficulty: ''
  });
  const [error, setError] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.difficulty) {
      setError('Please fill out every field.');
      return;
    }
    setError('');
    onStart(formData);
  }

  return (
    <div className="container">
      <h1>🌟 Trivia Challenge 🌟</h1>
      <p>Answer a single multiple‑choice question and test your knowledge!</p>

      <form onSubmit={handleSubmit}>
        <label>
          First Name<br />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane"
          />
        </label>

        <br /><br />

        <label>
          Category<br />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">-- choose --</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
        </label>

        <br /><br />

        <label>
          Difficulty<br />
          <select
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="">-- choose --</option>
            {difficulties.map(d => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </label>

        {error && <p className="error">{error}</p>}

        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
}

Home.propTypes = {
  onStart: PropTypes.func.isRequired
};
