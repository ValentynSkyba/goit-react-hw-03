import { useState } from "react";
import s from "./Option.module.css";

function Option({ handleVote, totalFeedbacks, handleDeleteVotes }) {
  return (
    <div className={s.btn}>
      <button onClick={() => handleVote("good")}>Good</button>
      <button onClick={() => handleVote("neutral")}>Neutral</button>
      <button onClick={() => handleVote("bad")}>Bad</button>

      {totalFeedbacks !== 0 ? (
        <button onClick={handleDeleteVotes}>Reset</button>
      ) : (
        ""
      )}
    </div>
  );
}

export default Option;
