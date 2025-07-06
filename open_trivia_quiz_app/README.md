# 🎉 Open Trivia Quiz App

A **beginner‑friendly React project** that fetches multiple‑choice questions from the [Open Trivia Database](https://opentdb.com/) and gives users instant feedback.  


---

## 📂 Folder Structure

```
open_trivia_quiz_app/
├── package.json
├── public/
│   └── index.html
├── src/
│   ├── api.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   └── components/
│       ├── Home.js
│       ├── Quiz.js
│       └── Result.js
└── tests/
    ├── Home.test.js
    ├── Quiz.test.js
    └── Result.test.js
```

---

## 🚀 Quick Start

1. **Clone & Install**

   ```bash
   git clone https://github.com/your‑username/open_trivia_quiz_app.git
   cd open_trivia_quiz_app
   npm install
   ```

2. **Run the Dev Server**

   ```bash
   npm start
   ```

   The app opens at **<http://localhost:3000>**.

3. **Run Tests**

   ```bash
   npm test
   ```

---

## 📝 How It Works (Beginner Guide)

### 1. Home Component (`🏠`)

| Feature | Code Highlight |
|---------|----------------|
| Single `formData` state object (`{ name, category, difficulty }`) | `useState({})` in `Home.js` |
| Validation before submit | `if (!name || !category || !difficulty)` |
| On success → lifts state up via `onStartQuiz(formData)` | `props` passing |

### 2. Quiz Component (`❓`)

* Fetches **one** question with:

  ```
  https://opentdb.com/api.php?amount=1&type=multiple&
      category=<id>&difficulty=<level>
  ```

* Combines correct & incorrect answers then **shuffles** them.
* Renders as a controlled *radio group*.
* Validates an answer is chosen, shows API error conditionally.

### 3. Result Component (`☑️`)

* Tells the user if they were **right / wrong**.
* Shows the **correct answer** (decoded from HTML entities).
* Offers **“Play again”** which resets `App.js` state to `stage = 'home'`.

### 4. State Machine in `App.js`

```
home  ── start────▶  fetching  ─▶  quiz  ── submit────▶  result
└──────────────────────────── restart ◀─── play again ┘
```

Stages are stored in one top‑level state variable.

---

## ✅ Passing the Grading Rubric

| Requirement | Implementation |
|-------------|----------------|
| Two+ components passing props | `Home → App`, `Quiz → App`, `Result → App` |
| Single state object for form inputs | `Home.js` uses `{ name, category, difficulty }` |
| Four+ category choices | *General Knowledge, Computers, Science & Nature, Sports* |
| All three difficulty choices | *easy, medium, hard* |
| API error handling | `error && <p className="error">...</p>` in `Quiz.js` |
| Validation on every form | prevents submit, shows message |
| Conditional rendering for each section | stage logic in `App.js` |
| Test for every route/section | Jest + React Testing Library in `tests/` |
| Start‑over button | `<button onClick={onRestart}>Play Again</button>` |

---

## 🔒 Environment Variables (Optional)

If you plan to add custom endpoints or token, create a `.env`:

```
REACT_APP_API_BASE=https://opentdb.com
```

---

## 🛠️ Linting & Formatting

```bash
npm run lint
```

Feel free to add Prettier / Husky for commit hooks 🔧.

---

