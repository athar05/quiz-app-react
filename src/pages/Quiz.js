import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Questions from "../components/Questions/Questions";
import Footer from "../components/Footer/Footer";

function Quiz() {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="body-container-quiz">
        <Questions />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Quiz;
