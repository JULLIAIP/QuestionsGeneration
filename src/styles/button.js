import { css } from "styled-components";
import colors from "./colors";

export const btnEffectGray = css`
  transition: background-color 150ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    background: ${colors.light};
    border-radius: 5px;
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.1);
  }
`;
export const btnSucess = css`
  border-radius: 15px;
  border: 1px solid ${colors.sucess};
  padding: 6px;
  font-size: 12px;
  color:  ${colors.sucess};
  margin-right: 10px;
`;
