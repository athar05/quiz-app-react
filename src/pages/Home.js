import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  return (
    <div className="container">
      <div className="nav">
        <Navbar />
      </div>
      <div className="body-container"></div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
