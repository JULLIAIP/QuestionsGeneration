import styled from "styled-components";
import colors from "../../styles/colors";
import { mainContainer } from "../../styles/main";
import { scrollbarThin } from "../../styles/scrollbar";

export const WrapperHome = styled.div`
  min-width: 100vw;
  min-height: 100vh;
`;
export const HomeContain = styled.div`
  display: flex; 
  flex-wrap:wrap;
  width: 100vw;
  height: 85vh;
  min-width: 300px;
  justify-content: center;
  align-items: center;
  gap:4%;

  .MuiCardContent-root {
    ${mainContainer}
    width: 30rem;
    justify-content: space-between;
    gap: 4%;
    padding: 5%;
    height: 15rem;
    background-color:${colors.primary};
    color:${colors.white};
button{
  color:${colors.white};
  border:2px solid${colors.white};
}

  }
  }
`;
export const CardWelcome = styled.div`
  ${mainContainer}
  width: 100vw;
`;
export const CardInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4%;
  width: 30rem;
  height: 15rem;
  border: 2px solid ${colors.primary};
  box-shadow: rgb(41 50 60 / 20%) 20px 25px 30px;
  backdrop-filter: blur(40px);
  border-radius: 5px;
  padding: 2%;
  svg {
    color: ${colors.primary};
  }
`;
export const OptionsContain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > button {
    width: 40%;
  }
`;
