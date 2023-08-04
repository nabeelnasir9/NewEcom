import { createContext, useState } from "react";

// I invoked the createContext.
export const context = createContext();

const AppContext = ({ children }) => {
  return <context.Provider>{children}</context.Provider>;
};

export default AppContext;
