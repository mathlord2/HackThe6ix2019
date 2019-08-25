import React, { Component} from "react";
import "../css/TripDisplay.css";
import ExpensePanel from "./ExpensePanel.js"
import AddExpense from "./AddExpense"

class TripDisplay extends React.Component {
  static propTypes = {
    start: PropTypes.string,
    end: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      startRate: '',
      endRate: ''
    }
    //call currency api




    $.ajax(backendHostURL,{
      headers: {
        'Authorization': 'Bearer ',
        'Access-Control-Allow-Origin': '*'
      }
    }).then(function(data){
      this.setState(data);
    });
  }

  handleClick = expenses => {
    this.setState(expenses);
  };

  return(
    <div className="App">
      <ExpensePanel 
      user=PropTypes.string,
      password=PropTypes.string,

      clickHandler={this.handleClick} 
      expenses={this.state.expenses} 
      startCurrency={this.state.start} 
      endCurrency={this.state.end} 
      startExchange={this.props.startRate} 
      endExchange={this.props.endRate} 
      ></ExpensePanel>

      <AddExpense 
      user=PropTypes.string,
      password=PropTypes.string,
      
      clickHandler={this.handleClick} 
      expenses={this.state.expenses} 
      currency={this.state.start}
      ></AddExpense>
    </div>
  );
}

export default App;