import { toast } from "react-toast";
import api from "../api";

export function getQuestions() {
  function apiCall({ value }) {
    return api.get(`api.php?amount=${value}`);
  }

  function toastError(errorMessage) {
    return toast.error({
      message: errorMessage,
    });
  }

  return { apiCall, toastError };
}
