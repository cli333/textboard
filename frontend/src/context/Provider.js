import React, { createContext, useState } from "react";

export const context = createContext();

const Provider = ({ children }) => {
  const [commentsFilter, setCommentsFilter] = useState("");

  return (
    <context.Provider
      value={{
        commentsFilter,
        setCommentsFilter
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Provider;
