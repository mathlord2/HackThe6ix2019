import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "../css/App.css";
import PropTypes from "prop-types";

import UploadScreen from "./UploadScreen.js"
import LoginScreen from "./LoginScreen.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginPage: [],
      uploadScreen: []
    }
  }
  componentWillMount(){
    var LoginPage=[];
    LoginPage.push(<LoginScreen parentContext={this}/>);
    this.setState({loginPage:loginPage});
  }

  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}


export default App;