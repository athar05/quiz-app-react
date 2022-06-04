import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import RulesText from "../components/Rules-Text/RulesText";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function Rules() {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="body-container-rules">
        <RulesText />
        <Link to="/quiz">
          <Button variant="contained" style={{ marginTop: "2rem" }}>
            Take Quiz
          </Button>
        </Link>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Rules;
