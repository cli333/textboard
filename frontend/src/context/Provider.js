import React, { createContext, useState } from "react";

export const context = createContext();

const Provider = ({ children }) => {
  return <context.Provider value={{}}>{children}</context.Provider>;
};

export default Provider;
