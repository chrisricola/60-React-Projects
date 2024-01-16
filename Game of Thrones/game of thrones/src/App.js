import React from "react";
import NavBar from  "./components/Navbar"
import Pages from "./components/Pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Pages/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
