import React, { useCallback, useState } from "react";
import { useContextQuestions } from "../../hooks/context";

//Libs
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Button from "@mui/material/Button";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { toast, ToastContainer } from "react-toast";

//Components
import NavBar from "../../components/NavBar";

//Style
import { CardQuestion, QuestionsContain, WrapperQuestions } from "./style";

const QuestionsPage = () => {
  const { history, listQuestions, handleSetReports, handlesetAnswers } =
    useContextQuestions();
  const [isChecked, setIsChecked] = useState();

  const answers = Number(localStorage.getItem("ansewrs"));

  const checkAwswer = useCallback(
    (question, correct_answers) => {
      if (isChecked === correct_answers) {
        localStorage.setItem("ansewrs", answers + 1);
        handlesetAnswers(answers + 1);
        toast.success("correct");
      } else {
        toast.error("incorrect");
      }
      handleSetReports({
        question,
        correct_answers,
        chosen_answers: isChecked,
      });
    },

    [answers, handleSetReports, handlesetAnswers, isChecked]
  );

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
                  onClick={() =>
                    checkAwswer(`${item.question}`, `${item.correct_answer}`)
                  }
                >
                  Corrigir
                </Button>
              </CardQuestion>
            </AccordionDetails>
          </Accordion>
        ))}
        <ToastContainer position="top" delay={1000} />
        <Button
          id="see-all"
          variant="contained"
          fullWidth
          onClick={() => {
            history("/review");
          }}
        >
          Ver Relatório
        </Button>
      </QuestionsContain>
    </WrapperQuestions>
  );
};
export default QuestionsPage;
