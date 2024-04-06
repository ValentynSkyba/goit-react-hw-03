import "./App.css";
import { useEffect, useState } from "react";
import Feedback from "./components/Feedback/Feedback.jsx";
import Desсription from "./components/Description/Description.jsx";
import Option from "./components/Option/Option.jsx";
import Notification from "./components/Notification/Notification";

const App = () => {
  const defaultNumbers = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [state, setState] = useState(() => {
    const savedClicks = JSON.parse(window.localStorage.getItem("saved-data"));

    return savedClicks || defaultNumbers;
  });

  const handleVote = (value) => {
    setState((prev) => ({ ...prev, [value]: prev[value] + 1 }));
  };

  useEffect(() => {
    window.localStorage.setItem("saved-data", JSON.stringify(state));
  }, [state]);

  const handleDeleteVotes = () => {
    setState({ good: 0, neutral: 0, bad: 0 });
  };
  const totalFeedback = state.good + state.neutral + state.bad;

  const positive = Math.round((state.good / totalFeedback) * 100);

  return (
    <>
      <Desсription />
      <Option
        handleVote={handleVote}
        totalFeedbacks={totalFeedback}
        handleDeleteVotes={handleDeleteVotes}
      />
      {totalFeedback ? (
        <Feedback
          state={state}
          totalFeedbacks={totalFeedback}
          positive={positive}
        />
      ) : (
        <Notification text={"No feedback yet"} />
      )}
    </>
  );
};

export default App;
