
import React from "react";
import Counter from "./components/Counter"
import DecreaseCounter from "./components/DecreaseCounter"
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter"
import IncreaseCounter from "./components/IncreaseCounter"



function App() {
  return (
   
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }} >
      <Counter />
      <IncreaseCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
      
    </div>
  );
}

export default App;
