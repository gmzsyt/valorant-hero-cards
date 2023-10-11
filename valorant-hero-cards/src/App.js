import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Provider from "./contextApi/Provider";
import './App.css'; 


function App() {
  return (
    <Provider>
      <div className="App">
      <Navbar />
      <Home  />
    </div></Provider>
    
  );
}

export default App;