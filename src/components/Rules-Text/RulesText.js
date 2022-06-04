import React from "react";

function RulesText() {
  return (
    <>
      <div className="quiz-banner">
        <img
          src="/assets/images/minion-all-the-best.jpg"
          alt="all the best"
          className="rules-banner"
        />
      </div>
      <ol>
        <li>
          You are given 4 options for each question, choose 1 option from given
          options.
        </li>
        <li> For each question youll get 1 points</li>
        <li> No marks will be deducted for wrong answers</li>
        <li> There will be total 10 questions</li>
        <li>
          For passing the quiz you have to give at-least answer 4 questions
          correctly
        </li>
      </ol>
    </>
  );
}

export default RulesText;
