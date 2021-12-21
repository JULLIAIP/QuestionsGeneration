import styled from "styled-components";
import colors from "../../styles/colors"

export const WrapperHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.primary};
  color:${colors.white};
  gap: 5%;
  width: 100%;
  height: 120px;
  box-shadow: rgb(41 50 60 / 20%) 20px 25px 30px;
  backdrop-filter: blur(40px);
  padding-left: 5%;
  >button{
    background: transparent;
    border:none;
    cursor:pointer;
    color:${colors.white};
  }
`;
