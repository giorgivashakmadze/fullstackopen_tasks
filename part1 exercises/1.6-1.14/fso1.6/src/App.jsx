import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const totalFB = good + neutral + bad;
  const averageScore = totalFB === 0 ? 0 : (good - bad) / totalFB;
  // Calculate percentage of positive feedback
  const positiveFeedbackPercentage = totalFB === 0 ? 0 : (good / totalFB) * 100;

  return (
    <div>
      <h1>Feedback App</h1>

      <div>
        <button onClick={() => setGood(good + 1)}>Good</button>
        <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
        <button onClick={() => setBad(bad + 1)}>Bad</button>
      </div>

      <div>
        <h2>Feedback Statistics:</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total Feedback: {totalFB}</p>
        <p>Average Score: {averageScore.toFixed(2)}</p>
        <p>
          Positive Feedback Percentage: {positiveFeedbackPercentage.toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default App;
