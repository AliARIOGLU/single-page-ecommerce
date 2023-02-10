import "./styles/reset.css";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useReducer } from "react";
import { cartReducer } from "./reducer/cartReducer";

function App() {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <div className="app">
      <Navbar state={state} dispatch={dispatch} />
      <Main state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;
