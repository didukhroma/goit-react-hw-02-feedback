import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Section from '../Section';
import Statistics from '../Statistics';
import Notification from '../Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = text => {
    this.setState(prevState => ({ [text]: prevState[text] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (good === 0) return 0;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = (good / total) * 100;
    const result = Number(positiveFeedbackPercentage.toFixed(1));
    return result;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleIncrement}
        />
        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedbackPercentage}
          />
        )}
      </Section>
    );
  }
}

export default App;
