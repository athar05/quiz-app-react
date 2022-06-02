import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";

function Navbar() {
  return (
    <React.Fragment>
      <AppBar>
        <Toolbar className="nav">
          <div>
            <Typography>
              <Link to="/" className="nav-text">
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
