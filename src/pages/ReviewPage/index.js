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
        Voltar
      </Button>
      {result > 0
        ? `Review Page você acertou ${result}% das questoes`
        : "Você não acertou nenhuma questão"}
    </WrapperReview>
  );
};
export default ReviewPage;
