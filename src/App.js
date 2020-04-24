import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Navbar from "./components/Navbar/Navbar";
import index from "./components/TourList/Itndex";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <itndex />
    </React.Fragment>
  );
}

export default App;
