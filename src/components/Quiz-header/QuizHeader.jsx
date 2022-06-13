import React, { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext.js";
import { UserContext } from "../../context/UserContext.js";

function QuizHeader({ questions }) {
  const { score } = useContext(ScoreContext);
  const { userName } = useContext(UserContext);
  return (
    <div>
      <h2>Welcome, {userName}</h2>
      {questions && <span>Category: {questions[1].category}</span>}
      <span>Score: {score}</span>
    </div>
  );
}

export default QuizHeader;
