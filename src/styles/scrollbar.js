import colors from "./colors";
import { css } from "styled-components";

export const scrollbarThin = css`
  &::-webkit-scrollbar-track {
    background: #dddddd;
  }

  &::-webkit-scrollbar {
    width: 10px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }

  scrollbar-color: ${colors.primary};
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
`;
