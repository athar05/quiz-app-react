import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { ResultContext } from "../../context/ResultContext.js";
import { ScoreContext } from "../../context/ScoreContext";

function Navbar() {
  const { resultDispatch } = useContext(ResultContext);
  const { setScore } = useContext(ScoreContext);

  const clickHandler = () => {
    setScore(0);
    resultDispatch({
      type: "REMOVED",
      payload: [],
    });
  };
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar className="nav">
          <div>
            <Typography>
              <Link to="/" className="nav-text" onClick={clickHandler}>
                QuizTime
              </Link>
            </Typography>
          </div>
          <div className="nav-buttons">
            <Button variant="outlined">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
