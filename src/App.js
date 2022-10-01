import React from "react";
import Counters from "./components/counters.jsx";
import NavBar from "./components/navBar.jsx";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <Counters />
    </div>
  );
}

export default App;
