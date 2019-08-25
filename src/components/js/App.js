import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../css/App.css";
import TripDisplay from "./TripDisplay"
import SideBar from "./SideBar.js"

function App() {
  return(
    <div className="App">
      <SideBar></SideBar>
      <TripDisplay></TripDisplay>
    </div>
  );
}

export default App;