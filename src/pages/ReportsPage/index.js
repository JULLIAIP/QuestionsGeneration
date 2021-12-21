import { Button, Card, CardContent, Typography } from "@mui/material";
import NavBar from "../../components/NavBar";
import { useContextQuestions } from "../../hooks/context";
import { ButtonContainer, CardContainer, ReportContainer, WrapperReports } from "./style";

const ReportsPage = () => {
  const { handleSetPageControl, reports, handleSetReports } =
    useContextQuestions();
  return (
    <WrapperReports>
      <NavBar name={"Reports"} />
      <ReportContainer>
        {reports?.map((item) => (
          <CardContainer key={item.question} isColor={item.correct_answers === item.chosen_answers}>
            <Card >
              <CardContent>
                <Typography>
                  <h4>
                    Question: <span>{item.question}</span>
                  </h4>
                  <h5>
                    Correct Answers:<span>{item.correct_answers}</span>
                  </h5>

                  <h5>
                    Chosen Answers:<span>{item.chosen_answers}</span>
                  </h5>
                </Typography>
              </CardContent>
            </Card>
            <hr />
          </CardContainer>
        ))}
      </ReportContainer>{" "}
      <ButtonContainer>
        <Button
          variant="contained"
          onClick={() => handleSetPageControl("home")}
        >
          Back
        </Button>
        <Button
          variant="outlined"
          onClick={() => {
            handleSetReports("CLEAR");
            handleSetPageControl("home");
          }}
        >
          Clear
        </Button>
      </ButtonContainer>
    </WrapperReports>
  );
};
export default ReportsPage;
