import React, { useCallback, useState } from "react";
import NavBar from "../../components/NavBar";
import { useContextQuestions } from "../../hooks/context";
import Button from "@mui/material/Button";
import { getQuestions } from "../../services/endpoint/get";
import { HomeContain, OptionsContain, WrapperHome } from "./style";
import { TextField } from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const HomePage = () => {
  const { handleSetListQuestions, listQuestions, handleSetPageControl } =
    useContextQuestions();

  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(null);

  const startGetQuestions = useCallback(
    async (value) => {
      const { apiCall, toastError } = getQuestions();
      try {
        setLoading(true);

        const response = await apiCall({
          value,
        });
        const data = response.data.results;

        handleSetListQuestions(data);
        setLoading(false);
        handleSetPageControl("questions");
      } catch (err) {
        setLoading(false);
        toastError();
      }
    },
    [handleSetListQuestions, handleSetPageControl]
  );
  return (
    <WrapperHome>
      <NavBar name={"Home"} />

      <HomeContain>
        <TextField
          id="outlined-basic"
          label="Quantas questões?"
          variant="outlined"
          fullWidth
          onChange={(e) => setQuantity(e.target.value)}
        />
        {quantity > 0 && (
          <OptionsContain>
            <Button
              fullWidth
              variant="contained"
              onClick={() => startGetQuestions(quantity)}
            >
              Start
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => setQuantity("")}
            >
              Cancel
            </Button>
          </OptionsContain>
        )}
        {loading && <HourglassBottomIcon spin />}
      </HomeContain>
    </WrapperHome>
  );
};
export default HomePage;
