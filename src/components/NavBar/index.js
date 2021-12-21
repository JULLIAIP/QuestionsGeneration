import { useContextQuestions } from "../../hooks/context";
import { WrapperHeader } from "./style";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

const NavBar = ({ name }) => {
  const { handleSetPageControl, handleSetListQuestions } =
    useContextQuestions();

  return (
    <WrapperHeader>
      {name !== "Home" && (
        <button
          onClick={() => {
            handleSetPageControl("home");
            handleSetListQuestions("");
          }}
        >
          <ArrowCircleLeftOutlinedIcon />
        </button>
      )}

      <h2>{name}</h2>
    </WrapperHeader>
  );
};

export default NavBar;
