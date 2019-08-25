import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../css/App.css";
import ExpensePanel from "./ExpensePanel.js"
import AddExpense from "./AddExpense"
import SideBar from "./SideBar.js"

function App() {
  return(
    <div className="App">
      <SideBar></SideBar>
      <ExpensePanel startCurrency="CAD" endCurrency="USD"></ExpensePanel>
      <AddExpense currency="CAD"></AddExpense>
    </div>
  );
}

export default App;