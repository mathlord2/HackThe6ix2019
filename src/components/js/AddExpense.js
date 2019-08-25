import React from "react";
import PropTypes from "prop-types";
import "../css/AddExpense.css";

class AddExpense extends React.Component {

    static propTypes = {
        currency: PropTypes.string
    }

    render() {
        return (
            <center>
                <form>
                    <input type="text" placeholder="Expense Name" name="Expense"></input>
                    <input type="text" placeholder={"Price " + '(' + this.props.currency + ')'} name={"Price " + '(' + this.props.currency + ')'}></input>
                    <button className="add-expense"><div>Add</div></button>
                </form>
            </center>
        );
    }
}

export default AddExpense;