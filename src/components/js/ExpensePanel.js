import React from "react";
import PropTypes from "prop-types";
import "../css/ExpensePanel.css";

class ExpensePanel extends React.Component {
    //static propTypes = {

    //}

    render() {
        return (
            <table className="Expenses">
                <tr>
                    <th>Name</th>
                    <th>{'yes1'}</th>
                    <th>{'Cost'}</th>
                </tr>
            </table>
        );
    }
}

export default ExpensePanel