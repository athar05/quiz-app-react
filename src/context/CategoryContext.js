import React, { createContext, useState } from "react";

const CategoryContext = createContext();

function CategoryContextProvider({ children }) {
  const [category, setCategory] = useState({
    value: 0,
    questions: [],
  });
  return (
    <div>
      <CategoryContext.Provider value={{ category, setCategory }}>
        {children}
      </CategoryContext.Provider>
    </div>
  );
}

export { CategoryContext, CategoryContextProvider };
