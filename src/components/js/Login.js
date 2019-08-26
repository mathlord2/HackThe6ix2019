import React from "react";
import PropTypes from "prop-types";
import "../css/Firebase.css";

class Login extends React.Component {

    login() {
        var userEmail = document.getElementById("email_field").value;
        var userPass = document.getElementById("password_field").value;

        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error : " + errorMessage);

            // ...
        });
    }

    switchToSignUp() {
        document.getElementById('login_div').style.display = "none";
        document.getElementById('newUserForm').style.display = "block";
    }

    render() {
        return (
            <div id="login_div">
                <h1 align="center">BudgetCation: Login</h1>
                <input type="email" placeholder="Email" id="email_field" />
                <input type="password" placeholder="Password" id="password_field" />
                <button id="loginBtn" onClick={this.login}>Login</button>
                <button id="switch1" onClick={this.switchToSignUp}>Switch to Sign Up</button>
            </div>
        );
    }
}

export default Login;