import React from "react";
import PropTypes from "prop-types";
import "./ExpenseHistory.css";
import {withDataContext} from '../../context';

class ExpenseHistory extends React.Component {
    static propTypes = {
        destination: PropTypes.string,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        var data = this.props.value;
        var json = [];
        if(data.destinations[this.props.destination]){
            var json = data.destinations[this.props.destination].expenses[this.props.category];
        }
        var arr1 = [];
        Object.keys(json).forEach(function(key) {
            arr1.push(json[key]);
        });
        this.state = {
            expenses: arr1,
        }
    }

    removeExpense = expense => {
        this.setState({expenses: this.state.expenses.filter(arrayItem => arrayItem !== expense)});
        this.editDB(expense);
    }

    removeAddedExpense = expense => {
        this.props.removeHandler(expense);
        this.editDB(expense);
    }

    editDB = expense => {
        //console.log(expense);
    }

    render() {
        return (
            <table className="Expenses">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.expenses.map((item, index) => (
                            <tr key={index}>
                                <th>{item.name}</th>
                                <th>{item.price}
                                    <button onClick={() => this.removeExpense(item)}>&times;</button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    {
                        this.props.addedExpenses.map((item, index) => (
                            <tr key={index}>
                                <th>{item.name}</th>
                                <th>{item.price}
                                    <button onClick={() => this.removeAddedExpense(item)}>&times;</button>
                                </th>
                            </tr>
                        ))
                    }
                </tfoot>
            </table>
        );
    }
}


export default withDataContext(ExpenseHistory);