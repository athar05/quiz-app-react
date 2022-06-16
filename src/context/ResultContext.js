import React, { createContext, useReducer } from "react";
import { resultReducer } from "../reducers/ResultReducer";

const ResultContext = createContext();

function ResultContextProvider({ children }) {
  const [result, resultDispatch] = useReducer(resultReducer, []);

  return (
    <div>
      <ResultContext.Provider value={{ result, resultDispatch }}>
        {children}
      </ResultContext.Provider>
    </div>
  );
}

export { ResultContext, ResultContextProvider };
