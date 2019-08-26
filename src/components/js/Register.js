import React from "react";
import PropTypes from "prop-types";
import "../css/Firebase.css";

class SignUp extends React.Component {

    submitForm(e) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var homeLocation = document.getElementById('homeLocation').value;
        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;

            if (errorCode == 'auth/email-already-in-use') {
                alert('This username is already in use.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });

        e.preventDefault();

        // Save message
        saveMessage(name, password, email, homeLocation);

        // Show alert
        window.alert('Sign up successful!');

        document.getElementById('newUserForm').style.display = 'none';
        document.getElementById('user_div').style.display = 'block';

        // Clear form
        document.getElementById('newUserForm').reset();

        //ACCESS EMAIL AND DATA THROUGH ATTRIBUTES FROM #USER_DIV
        document.getElementById('user_div').setAttribute('email', email);
        document.getElementById('user_div').setAttribute('password', password);

        var newMessageRef = firebase.database().ref().push();
        newMessageRef.set({
            name, name,
            email: email,
            password: password,
            homeLocation: homeLocation
        });
    }

    switchToLogin() {
        document.getElementById('login_div').style.display = "block";
        document.getElementById('newUserForm').style.display = "none";
    }

    render() {
        return (
            <form id="newUserForm" onSubmit={this.submitForm}>
                <h1 align="center">BudgetCation: Sign Up</h1>
                <input type="text" placeholder="Name" name="name" id="name" required />
                <input type="email" placeholder="Email" name="email" id="email" required />
                <input type="password" placeholder="Password" name="password" id="password" required />
                <input type="text" placeholder="Home Location" name="homeLocation" id="homeLocation" required />
                <button type="submit" id="signUpButton">Sign Up</button>
                <button id="switch2" onClick={this.switchToLogin}>Switch to Login</button>
            </form>
        );
    }
}

export default SignUp;