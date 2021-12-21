import styled from "styled-components";
import colors from "../../styles/colors";
import { mainContainer } from "../../styles/main";
import { scrollbarThin } from "../../styles/scrollbar";

export const WrapperReports = styled.div`
  ${mainContainer};
  width: 100%;
  min-height: 100vh;
`;
export const ReportContainer = styled.div`
  ${mainContainer};
  ${scrollbarThin};
  gap: 4%;
  padding: 5%;
  margin-top: 5%;
  width: 80vw;
  height: 60vh;
  overflow: auto;
  margin-top: 5vh;
  background-color: ${colors.ligth};
`;
export const CardContainer = styled.div`
  box-shadow: ${(props) => (props.isColor ? "#9AC843" : "#E3052E")} 2px 5px 30px;
  backdrop-filter: blur(40px);
  width: 90%;
  height: 90%;

  .MuiCardContent-root {
    width: 50vw;
    padding: 5%;
    min-width: 250px;
  }
`;
export const ButtonContainer = styled.div`
  display: flex;
  width: 80vw;
  justify-content: space-between;
  align-items: center;
  margin-top: 5vh;
  height: 15vh;
`;
