import React, { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext.js";
import { UserContext } from "../../context/UserContext.js";

function QuestionsHeader({ questions, currQues }) {
  console.log(questions);
  const { score } = useContext(ScoreContext);
  const { userName } = useContext(UserContext);
  return (
    <div className="quiz-header">
      <h1>Welcome, {userName}</h1>
      <div className="quiz-details">
        <h4>Score: {score}</h4>
        <h4>Category: {questions[currQues].category}</h4>
      </div>
    </div>
  );
}

export default QuestionsHeader;
