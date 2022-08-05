import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { SectionTitle } from '../Section/Section';
import { Notification } from '../Notificaion/Notification.jsx';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const voteForIncriment = options => {
    switch (options) {
      case 'good':
        setGood(good => good + 1);
        break;
      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;
      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () =>
    [good, neutral, bad].reduce((acc, value) => acc + value);

  function countPositiveFeedbackPercentage() {
    if (total) {
      return ((good / total) * 100).toFixed();
    } else {
      return 0;
    }
  }

  const options = ['good', 'neutral', 'bad'];
  const total = countTotalFeedback();
  const feedback = countPositiveFeedbackPercentage();

  return (
    <>
      <SectionTitle title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          voteForIncriment={voteForIncriment}
        />
      </SectionTitle>
      {total > 0 && (
        <SectionTitle title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            feedback={feedback}
          />
        </SectionTitle>
      )}
      {!total && <Notification message="There is no feedback" />}
    </>
  );
}
