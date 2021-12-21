import React from "react";
//Libs
import { Routes, Route } from "react-router-dom";
//Pages
import QuestionGeneration from "../pages";
import ReviewPage from "../pages/ReviewPage";

const Rutes = () => {
  return (
    <Routes>
      <Route path="/" element={<QuestionGeneration />} />

      <Route exact path="/review" element={<ReviewPage />} />
      {/* Error Page */}
    </Routes>
  );
};
export default Rutes;
