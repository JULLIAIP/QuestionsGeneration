import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextQuestions = createContext();

const ContextProvider = ({ children }) => {
  const [listQuestions, setListQuestions] = useState();
  const [pageControl, setPageControl] = useState(null);

  const history = useNavigate();

  const handleSetListQuestions = useCallback((value) => {
    setListQuestions(value);
  }, []);
  const handleSetPageControl = useCallback((value) => {
    setPageControl(value);
  }, []);
  return (
    <ContextQuestions.Provider
      value={{
        handleSetListQuestions,
        listQuestions,
        history,
        pageControl,
        handleSetPageControl,
      }}
    >
      {children}
    </ContextQuestions.Provider>
  );
};

const useContextQuestions = () => {
  const context = useContext(ContextQuestions);

  if (!context) {
    throw new Error(
      "useContextQuestions must be used within an ContextProvider"
    );
  }

  return context;
};

export { useContextQuestions, ContextProvider };
