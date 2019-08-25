import React from "react";
import ReactDOM from "react-dom";
import App from "./components/js/App.js";
import Login from "./components/js/Login.js";
import "./index.css"
import "./normalize.css"

if (process.env.NODE_ENV !== 'production') {
   console.log('Looks like we are in development mode!');
}

function Index(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <App />;
    }
    return <Login />;
}

ReactDOM.render(<Login />, document.getElementById("root"));