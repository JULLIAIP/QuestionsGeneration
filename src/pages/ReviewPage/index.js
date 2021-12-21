import { useContextQuestions } from "../../hooks/context";
import { WrapperReview } from "./style";
import Button from "@mui/material/Button";

const ReviewPage = () => {
  const { history, listQuestions } = useContextQuestions();

  const answers = localStorage.getItem("ansewrs");
  const result = (answers / listQuestions.length) * 100;

  const clear = () => {
    localStorage.serItem("ansewrs", "");
  };
  return (
    <WrapperReview>
      <Button
        variant="contained"
        onClick={() => {
          history("/");
          clear();
        }}
      >
        Back
      </Button>
      {result > 0
        ? <h2>You got {result}% of the questions right</h2>
        : "You got no questions right"}
    </WrapperReview>
  );
};
export default ReviewPage;
