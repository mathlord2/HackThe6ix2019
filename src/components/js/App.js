import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../css/App.css";
import ExpensePanel from "./ExpensePanel.js";
import AddExpense from "./AddExpense.js";
import SideBar from "./SideBar.js";
import Header from "./Header.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";

function App() {
  return(
    <div className="App">
      <Login></Login>
      <SignUp></SignUp>
      <div id="user_div">
        <Header></Header>
        <SideBar></SideBar>
        <div id="vacationInfo">
          <h1 align="center" id="placeName"></h1>
          <ExpensePanel startCurrency="CAD" endCurrency="USD"></ExpensePanel>
          <AddExpense currency="USD"></AddExpense>
        </div>
      </div>
    </div>
  );
}

export default App;