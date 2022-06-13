import React, { useState, createContext } from "react";

const UserContext = createContext({ userName: "Joe" });

function UserContextProvider({ children }) {
  const [userName, setUserName] = useState("Joe");
  return (
    <div>
      <UserContext.Provider value={{ userName, setUserName }}>
        {children}
      </UserContext.Provider>
    </div>
  );
}

export { UserContext, UserContextProvider };
