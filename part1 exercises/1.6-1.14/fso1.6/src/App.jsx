import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
  const positiveFeedbackPercentage =
    totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <div>
      <h2>Feedback Statistics:</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total Feedback: {totalFeedback}</p>
      <p>Average Score: {averageScore.toFixed(2)}</p>
      <p>Positive Feedback Percentage: {positiveFeedbackPercentage.toFixed(2)}%</p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = good + neutral + bad;

  return (
    <div>
      <h1>Unicafe Feedback App</h1>

      <div>
        <h2>Click buttons to give feedback:</h2>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>

      {totalFeedback > 0 && <Statistics good={good} neutral={neutral} bad={bad} />}
    </div>
  );
};

export default App;
