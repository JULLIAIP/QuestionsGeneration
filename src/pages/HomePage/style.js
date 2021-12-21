import styled from "styled-components";

export const WrapperHome = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const HomeContain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4%;
  width: 20%;
  min-width: 200px;
  height: 85%;
  justify-content: center;
  align-items: center;
  margin: auto;
`;
export const OptionsContain = styled.div`
  display: flex;
  justify-content: space-between;
width: 100%;

  > button {
    width: 40%;
   
  }
`;
