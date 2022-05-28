import React from "react";
import "./App.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { CategoryContextProvider } from "./context/CategoryContext.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <BrowserRouter>
      <CategoryContextProvider>
        <App />
      </CategoryContextProvider>
    </BrowserRouter>
  </>
);
