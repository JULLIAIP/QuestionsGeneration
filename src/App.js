import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./hooks/context";
import Rutes from "./router";
import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Rutes />
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;
