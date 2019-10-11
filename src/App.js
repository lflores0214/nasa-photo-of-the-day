import React from "react";
import "./App.css";
import CardHolder from "./components/CardHolder"
import ProjectContainer from "./components/ProjectContainer"
import Footer from "./components/Footer"


function App() {
  
  return (
    <div className="App">
        <CardHolder />
        <ProjectContainer />
        <Footer />
    </div>
  );
}

export default App;
