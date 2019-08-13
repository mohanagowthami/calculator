import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Counter from "./Counter";
import CalculatorContainer from "./components/CalculatorContainer/index";
function App() {
  return (
    <div className="totalContainer">
      <CalculatorContainer />
    </div>
  );
}

export default App;
