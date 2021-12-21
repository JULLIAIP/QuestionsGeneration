import { useLayoutEffect } from "react";
import { useContextQuestions } from "../hooks/context";
import HomePage from "./HomePage";
import QuestionsPage from "./QuestionsPage";
import ReportsPage from "./ReportsPage";

const QuestionGeneration = () => {
  const { pageControl, handleSetPageControl } = useContextQuestions();

  useLayoutEffect(() => {
    handleSetPageControl("home");
  }, [handleSetPageControl]);
  return (
    <div>
      {pageControl === "home" && <HomePage />}
      {pageControl === "questions" && <QuestionsPage />}
      {pageControl === "reports" && <ReportsPage />}
    </div>
  );
};
export default QuestionGeneration;
