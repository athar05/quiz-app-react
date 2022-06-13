import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { CategoryContext } from "../../context/CategoryContext";
import { CircularProgress } from "@mui/material";
import QuizHeader from "../Quiz-header/QuizHeader";

function Questions() {
  const { category, setCategory } = useContext(CategoryContext);

  const [options, setOptions] = useState();
  const [questions, setQuestions] = useState(null);
  const [currQues, setCurrQues] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const { data } = await axios.get(
          `https://opentdb.com/api.php?amount=10&category=${category.value}&difficulty=medium&type=multiple`
        );
        setQuestions(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchQuestions();
  }, []);

  const handleShuffle = (optionArr) => {
    return optionArr.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer,
          ...questions[currQues]?.incorrect_answers,
        ])
    );
  }, [questions]);

  console.log(options);

  return (
    <div>
      <QuizHeader questions={questions} />
      {questions && questions.map((obj) => <div>{obj.question}</div>)}
    </div>
  );
}

export default Questions;
