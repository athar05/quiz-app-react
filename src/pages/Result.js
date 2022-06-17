import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ResultBody from "../components/Result-body/ResultBody";
import Footer from "../components/Footer/Footer";

function Result() {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="body-container-result">
        <ResultBody />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Result;
