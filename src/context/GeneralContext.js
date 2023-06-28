import { createContext, useReducer } from "react";
import GeneralReducer from "./GeneralReducer";

const GeneralContext = createContext();

export const GeneralProvider = ({ children }) => {
  const initialStates = {
    isLogged: localStorage.getItem("isLogged"),
  };

  const setIsLogged = (value) => {
    dispatch({ type: "SET_LOGIN", payload: value });
    localStorage.setItem("isLogged", value);
  };

  const [state, dispatch] = useReducer(GeneralReducer, initialStates);

  return (
    <GeneralContext.Provider
      value={{
        isLogged: state.isLogged,
        setIsLogged,
      }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
