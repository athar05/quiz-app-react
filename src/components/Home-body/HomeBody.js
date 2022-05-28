import { Button, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import CategoryCard from "../Categories-card/CategoryCard";

function HomeBody() {
  const [quizSettings, setQuizSettings] = useState({
    category: "",
    difficulty: "",
  });
  return (
    <div className="home-body-container">
      <div className="quiz-settings">
        <h2>Quiz Settings</h2>
        <CategoryCard />
        {/* <TextField
          label="Select Difficulty"
          variant="outlined"
          style={{ width: "22%" }}
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="Difficult" value="difficult">
            Difficult
          </MenuItem>
        </TextField>

        <Button variant="contained" color="primary" size="large">
          Start Quiz
        </Button> */}
      </div>
      <div className="home-body-banner">
        <img
          src="/assets/images/quiz-banner.svg"
          alt="quiz banner"
          className="quiz-banner"
        />
      </div>
    </div>
  );
}

export default HomeBody;
