import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const ContextQuestions = createContext();

const ContextProvider = ({ children }) => {
  const [listQuestions, setListQuestions] = useState();
  const [pageControl, setPageControl] = useState(null);
  const [reports, setReports] = useState([]);
  const [answers, setAnswers] = useState();

  const history = useNavigate();

  const result = (answers / listQuestions?.length) * 100;

  const handleSetListQuestions = useCallback((value) => {
    setListQuestions(value);
  }, []);
  const handleSetPageControl = useCallback((value) => {
    setPageControl(value);
  }, []);
  const handlesetAnswers = useCallback((value) => {
    setAnswers(value);
  }, []);

  const handleSetReports = useCallback((data) => {
    if (data === "CLEAR") {
      setReports([]);
    } else {
      setReports((oldValue) => {
        const isExist = oldValue.find(
          (item) => item?.question === data.question
        );
        if (isExist) {
          return oldValue.filter((item) => item?.question !== data.question);
        }

        return [...oldValue, data];
      });
    }
  }, []);

  return (
    <ContextQuestions.Provider
      value={{
        result,

        //!list
        handleSetListQuestions,
        listQuestions,

        //!navigate
        history,
        pageControl,

        //!review
        handleSetPageControl,
        reports,
        answers,
        handleSetReports,
        handlesetAnswers,
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
