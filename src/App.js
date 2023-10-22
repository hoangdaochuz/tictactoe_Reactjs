import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Game from "./components/game/Game";

function App() {
  return (
    <div className="App">
      <Game />
      <ToastContainer />
    </div>
  );
}

export default App;
