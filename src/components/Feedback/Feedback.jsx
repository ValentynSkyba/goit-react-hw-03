import s from "./Feedback.module.css";
const Feedback = ({ state, totalFeedbacks, positive }) => {
  return (
    <div className={s.fed}>
      <p>Good: {state.good}</p>
      <p>Neutral {state.neutral}</p>
      <p>Bad: {state.bad}</p>
      <p>Total:{totalFeedbacks}</p>
      <p>Positive {positive}%</p>
    </div>
  );
};

export default Feedback;
