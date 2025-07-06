import axios from 'axios';

// helper to decode HTML entities returned by OpenTriviaDB
function decodeHtml(html) {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
}

export async function fetchQuestion({ category, difficulty }) {
  const url = `https://opentdb.com/api.php?amount=1&type=multiple&category=${category}&difficulty=${difficulty}`;
  const { data } = await axios.get(url);
  if (data.response_code !== 0) {
    throw new Error('OpenTriviaDB did not return a question');
  }
  const q = data.results[0];
  const answers = [...q.incorrect_answers, q.correct_answer]
    .map(decodeHtml)
    .sort(() => Math.random() - 0.5); // shuffle
  return {
    question: decodeHtml(q.question),
    correctAnswer: decodeHtml(q.correct_answer),
    answers
  };
}
