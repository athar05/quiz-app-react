import "./App.css";
import Home from "./pages/Home";
import Rules from "./pages/Rules";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/result" element={<Result />} />
        <Route path="/Quiz" element={<Quiz />} />
      </Routes>
    </div>
  );
}

export default App;
