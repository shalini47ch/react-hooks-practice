import { createContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const user = {
    name: "tina",
    age: 26,
  };
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>;
};
export { AppProvider, AppContext };
