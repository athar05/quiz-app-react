import React, { useState, createContext } from "react";

const ScoreContext = createContext({
  score: 0,
});

function ScoreContextProvider({ children }) {
  const [score, setScore] = useState(0);
  return (
    <div>
      <ScoreContext.Provider value={{ score, setScore }}>
        {children}
      </ScoreContext.Provider>
    </div>
  );
}

export { ScoreContext, ScoreContextProvider };
