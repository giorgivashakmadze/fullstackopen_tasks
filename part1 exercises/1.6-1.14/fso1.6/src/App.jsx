import { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad, totalFeedback }) => {
  const averageScore = totalFeedback === 0 ? 0 : (good - bad) / totalFeedback;
  const positiveFeedbackPercentage =
    totalFeedback === 0 ? 0 : (good / totalFeedback) * 100;

  return (
    <div>
      <h2>Feedback Statistics:</h2>
      <StatisticLine text="Good" value={good} />
      <StatisticLine text="Neutral" value={neutral} />
      <StatisticLine text="Bad" value={bad} />
      <StatisticLine text="Total Feedback" value={totalFeedback} />
      <StatisticLine text="Average Score" value={averageScore.toFixed(2)} />
      <StatisticLine text="Positive Feedback Percentage" value={`${positiveFeedbackPercentage.toFixed(2)}%`} />
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const totalFeedback = good + neutral + bad;

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>Unicafe Feedback App</h1>

      <div>
        <h2>Click buttons to give feedback:</h2>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
      </div>

      {totalFeedback > 0 && (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedback={totalFeedback}
        />
      )}
    </div>
  );
};

export default App;
