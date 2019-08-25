import React from "react";
import PropTypes from "prop-types";
import "../css/AddExpense.css";

class AddExpense extends React.Component {

    static propTypes = {
        user: PropTypes.string,
        password: PropTypes.string,

        clickHandler: PropTypes.func,
        expenses: PropTypes.array,
        currency: PropTypes.string
    }

    handleClick = () => {
        $.ajax(backendHostUrl + '/tasks', {
            headers: {
                'Authorization': 'Bearer ',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST',
            data: JSON.stringify({'user': this.props.user, 'password': this.props.password, 'name' : , 'amount' : }),
            contentType : 'application/json'
        }).then(function(data){
            this.props.clickHandler(data);
        });
    }

    render() {
        return (
            <form>
                <input type="text" name="Expense"></input>
                <input type="text" name={"Price " + '(' + this.props.currency + ')'}></input>
                <button className="add-expense"><div>Add</div></button>
            </form>
        );
    }
}

export default AddExpense