import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./context/CategoryContext.js";
import { ScoreContextProvider } from "./context/ScoreContext.js";
import { UserContextProvider } from "./context/UserContext.js";
import { ResultContextProvider } from "./context/ResultContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <ResultContextProvider>
        <UserContextProvider>
          <ScoreContextProvider>
            <CategoryContextProvider>
              <App />
            </CategoryContextProvider>
          </ScoreContextProvider>
        </UserContextProvider>
      </ResultContextProvider>
    </BrowserRouter>
  </>
);
