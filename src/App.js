import React, {useState} from "react";
import "./App.css";
import CardHolder from "./components/CardHolder"
import ProjectContainer from "./components/ProjectContainer"

function App() {
  
  return (
    <div className="App">
        <CardHolder />
        <ProjectContainer />
    </div>
  );
}

export default App;
