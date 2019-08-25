import React from "react";
import PropTypes from "prop-types";
import "../css/AddExpense.css";

class AddExpense extends React.Component {

    static propTypes = {
        currency: PropTypes.string
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