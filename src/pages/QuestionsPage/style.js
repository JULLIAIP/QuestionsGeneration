import styled from "styled-components";
import colors from "../../styles/colors";
import { scrollbarThin } from "../../styles/scrollbar";

export const WrapperQuestions = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2%;
  justify-content: center;
`;
export const QuestionsContain = styled.div`
  overflow: auto;
  ${scrollbarThin};
  width: 100%;
  min-height: 85%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 2%;
  .MuiAccordion-root {
    box-shadow: rgb(41 50 60 / 20%) 20px 25px 30px;
  backdrop-filter: blur(40px);
  }
`;
export const CardQuestion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 250px;
  border-radius: 5px;
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 2%;
  > hr {
    margin: 10px 0px;
  }
  > h2 {
    color: ${colors.primary};
    line-height: 40px;
  }
  > label {
    display: flex;
    gap: 1%;
  }
  > button {
    width: 200px;
    position: relative;
    left: 80%;
  }
`;
