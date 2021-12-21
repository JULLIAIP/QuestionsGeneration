import { useLayoutEffect } from "react";
import { useContextQuestions } from "../hooks/context";
import HomePage from "./HomePage";
import QuestionsPage from "./QuestionsPage";

const QuestionGeneration = () => {
  const { pageControl, handleSetPageControl } = useContextQuestions();
  console.log(pageControl)

  useLayoutEffect(() => {
    handleSetPageControl("home");
  }, [handleSetPageControl]);
  return (
    <div>
      {pageControl === "home" && <HomePage />}
      {pageControl === "questions" && <QuestionsPage />}
    </div>
  );
};
export default QuestionGeneration;
