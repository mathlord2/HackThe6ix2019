import React from "react";
import PropTypes from "prop-types";
import "../css/ExpensePanel.css";

class ExpensePanel extends React.Component {
    static propTypes = {
        user: PropTypes.string,
        password: PropTypes.string,

        clickHandler: PropTypes.func,
        expenses: PropTypes.array,
        startCurrency: PropTypes.string, 
        endCurrency: PropTypes.string, 
        startRate: PropTypes.number,
        endRate: PropTypes.number
    }

    handleClick = () => {
        $.ajax(backendHostUrl + '/tasks', {
            headers: {
                'Authorization': 'Bearer ',
                'Access-Control-Allow-Origin': '*'
            },
            method: 'POST',
            data: JSON.stringify({}),
            contentType : 'application/json'
        }).then(function(data){
            this.props.clickHandler(data);
        });
    };

    render() {
        return (
            <table className="Expenses">
                <tr>
                    <th>Name</th>
                    <th>{'Cost' + '(' + this.props.startCurrency + ')'}</th>
                    <th>{'Cost' + '(' + this.props.endCurrency + ')'}</th>
                </tr>
                {this.state.expenses.map(item => (
                <tr>
                    <th>{item[0]}</th>
                    <th>{item[1]}</th>
                    <th>{item[2]}</th>
                    <th><button onclick="this.handleClick">&times;</button></th>
                </tr>
                ))}
            </table>
        );
    }
}

export default ExpensePanel