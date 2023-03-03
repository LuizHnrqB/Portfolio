import "./App.css";
import SideNavBar from "../components/sideNavBar/sideNavBar";
import Rotas from "./routes";
import React from "react";

function App() {
  return (
    <div className="App">
      <SideNavBar />
      <Rotas />
    </div>
  );
}

export default App;
