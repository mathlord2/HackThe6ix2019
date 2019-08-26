import React from "react";
import PropTypes from "prop-types";
import "../css/SideBar.css";

class SideBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            places: ['Beijing', 'Mumbai']
        }
    }

    closeSideBar() {
        $('#sidebar').css({ 'width': '0px' });
        $('#header i').css({ 'right': '10px' });
    }

    signOut() {
        firebase.auth().signOut().then(function () {
            $('#sidebar').css({ 'width': '0px' });
            $('#header i').css({ 'right': '10px' });
            $('#email_field').val('');
            $('#password_field').val('');
            document.getElementById("user_div").style.display = "none";
            document.getElementById("login_div").style.display = "block";
        });
    }

    showVacations() {
        if ($('.show-hide:first p').text() == 'Show Vacations') {
            $('.dropdownContent:first').show();
            $('.show-hide:first p').html('Hide Vacations');
        } else {
            $('.dropdownContent:first').hide();
            $('.show-hide:first p').html('Show Vacations');
        }
    }

    showCategories() {
        if ($('.show-hide:last p').text() == 'Show Categories') {
            $('.dropdownContent:last').show();
            $('.show-hide:last p').html('Hide Categories');
        } else {
            $('.dropdownContent:last').hide();
            $('.show-hide:last p').html('Show Categories');
        }
    }

    displayVacation() {
        document.getElementById('vacationInfo').style.display = 'block';
        var vacation = $(this).text();
        $('#placeName').html(vacation + ' - General');
    }

    displayCategory() {
        if (document.getElementById('placeName').innerHTML != '') {
            var arr = document.getElementById('placeName').innerHTML.split(' - ');
            arr[1] = $(this).text();
            $('#placeName').html(arr.join(' - '));
        } else {
            alert('Choose/create a vacation.');
        }
        
    }

    render() {
        return (
            <div id="sidebar">
                <a id="closeSideBar" onClick={this.closeSideBar}>
                    <h1>&times;</h1>
                </a>
                <br/>
                <br/>
                <a id="signOut" onClick={this.signOut}>
                    <h1>Sign Out</h1>
                </a>
                <input placeholder="Add Visit" id="visit"/>
                <button id="addVisit">Add</button>

                <div id="vacations">
                    <div className="show-hide" onClick={this.showVacations}>
                        <p>Show Vacations</p>
                    </div>
                    <div className="dropdownContent">
                    {this.state.places.map(item => {
                        <div class="vacation" onClick={this.displayVacation}><i className="fa fa-trash"></i><p>{item}</p></div>
                    })}
                    </div>
                </div>

                <div id="categories">
                    <div className="show-hide" onClick={this.showCategories}>
                        <p>Show Categories</p>
                    </div>
                    <div className="dropdownContent">
                        <div className="category" onClick={this.displayCategory}><p>Accommodations</p></div>
                        <div className="category" onClick={this.displayCategory}><p>Attractions</p></div>
                        <div className="category" onClick={this.displayCategory}><p>Food</p></div>
                        <div className="category" onClick={this.displayCategory}><p>Transport</p></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SideBar;