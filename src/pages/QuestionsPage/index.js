import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toast";
import NavBar from "../../components/NavBar";
import { useContextQuestions } from "../../hooks/context";
import { CardQuestion, QuestionsContain, WrapperQuestions } from "./style";

const QuestionsPage = () => {
  const { history, listQuestions } = useContextQuestions();
  const [isChecked, setIsChecked] = useState();
  const [answers, setAnswers] = useState(0);

  const checkAwswer = useCallback(
    (correct_answer) => {
      if (isChecked === correct_answer) {
        setAnswers(answers + 1);
        toast.success("correct");
      } else {
        toast.error("incorrect");
      }
    },
    [answers, isChecked]
  );
  const checkAll = () => {
    localStorage.setItem("ansewrs", answers);
  };
  return (
    <WrapperQuestions>
      <NavBar name={"Questions List"} />
      <QuestionsContain>
        {listQuestions.map((item) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Question 1</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <CardQuestion
                key={item.question}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <h3>{item.category}</h3>
                <h4>Nível de Dificuldade {item.difficulty}</h4>
                <hr />
                <h2>{item.question}</h2>
                {item.incorrect_answers.map((question) => (
                  <label>
                    <input
                      id={`e${question}`}
                      type={"checkbox"}
                      onChange={() => setIsChecked(`e${question}`)}
                      checked={isChecked === `e${question}`}
                    />
                    <span>{question}</span>
                  </label>
                ))}
                <label>
                  <input
                    id="c"
                    type={"checkbox"}
                    onChange={() => setIsChecked(`${item.correct_answer}`)}
                    checked={isChecked === item.correct_answer}
                  />
                  {item.correct_answer}
                </label>

                <Button
                  variant="outlined"
                  onClick={() => checkAwswer(`${item.correct_answer}`)}
                >
                  Corrigir
                </Button>
                <ToastContainer />
              </CardQuestion>
            </AccordionDetails>
          </Accordion>
        ))}
        <Button
          id="see-all"
          variant="contained"
          fullWidth
          onClick={() => {
            history("/review");
            checkAll();
          }}
        >
          Ver Relatório
        </Button>
      </QuestionsContain>
    </WrapperQuestions>
  );
};
export default QuestionsPage;
