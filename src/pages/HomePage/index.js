import React, { useCallback, useState } from "react";
import NavBar from "../../components/NavBar";
import { useContextQuestions } from "../../hooks/context";
import Button from "@mui/material/Button";
import { getQuestions } from "../../services/endpoint/get";
import {
  CardInput,
  CardWelcome,
  HomeContain,
  OptionsContain,
  WrapperHome,
} from "./style";
import { Card, CardContent, TextField, Typography } from "@mui/material";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";

const HomePage = () => {
  const { handleSetListQuestions, handleSetPageControl, reports, answers } =
    useContextQuestions();

  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(null);

  const clear = localStorage.setItem("ansewrs", "");

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
        clear();
      } catch (err) {
        setLoading(false);
        toastError();
      }
    },
    [clear, handleSetListQuestions, handleSetPageControl]
  );

  return (
    <WrapperHome>
      <NavBar name={"Home"} />

      <HomeContain>
        <CardWelcome>
          <h2>Welcome</h2>
          <span>
            to the
            <strong> spectacular question generator</strong>
          </span>
        </CardWelcome>
        {reports.length > 0 && (
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Você respondeu {reports.length} questões e teve {answers}{" "}
                reposta(s) correta(s)
              </Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => handleSetPageControl("reports")}
              >
                Ver Relatório
              </Button>
            </CardContent>
          </Card>
        )}
        <CardInput>
          <span>
            Aqui você pode escolher a quantidade de questões que deseja
            responder:
          </span>
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
        </CardInput>
      </HomeContain>
    </WrapperHome>
  );
};
export default HomePage;
