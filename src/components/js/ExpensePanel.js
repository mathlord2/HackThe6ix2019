import React from "react";
import PropTypes from "prop-types";
import "../css/ExpensePanel.css";

class ExpensePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [['yes',1,3]]
        }
    }

    handleClick = buttonName => {
        //let index = this.state.expenses.indexOf();
        
        //this.setState(expenses.filter());
    };

    static propTypes = {
        startCurrency: PropTypes.string, 
        endCurrency: PropTypes.string, 
    }

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