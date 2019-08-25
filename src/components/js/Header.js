import React from "react";
import PropTypes from "prop-types";
import "../css/Header.css";

class Header extends React.Component {

    openSideBar() {
        $('#sidebar').css({ 'width': '300px' });
        $('#header i').css({ 'right': '310px' });
    }

    render() {
        return (
            <div id="header">
                <i className="fa fa-bars" onClick={this.openSideBar}></i>
                <h1 align="center">Welcome.</h1>
            </div>
        );
    }
}

export default Header;