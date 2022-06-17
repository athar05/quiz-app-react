import React, { useContext } from "react";
import { ResultContext } from "../../context/ResultContext";
import { ScoreContext } from "../../context/ScoreContext";

function ResultBody() {
  const { result } = useContext(ResultContext);
  const { score } = useContext(ScoreContext);
  return (
    <div className="result-body">
      <h1>Result</h1>
      {result.map((obj) => (
        <div className="result-question-body">
          {obj.isCorrect ? (
            <div>
              <h3>{obj.question}</h3>
              <div className="correct result-option">
                <h4>Correct Answer: {obj.correct_answer}</h4>
              </div>
            </div>
          ) : (
            <div className="result-question-body">
              <h3>{obj.question}</h3>
              <div className="correct result-option">
                <h4>Correct Answer: {obj.correct_answer}</h4>
              </div>
              <div className="wrong result-option">
                <h4>Your Answer: {obj.optionSelected}</h4>
              </div>
            </div>
          )}
        </div>
      ))}
      <h1 style={{ textAlign: "center" }}>📈 Your Score: {score}</h1>
    </div>
  );
}

export default ResultBody;
