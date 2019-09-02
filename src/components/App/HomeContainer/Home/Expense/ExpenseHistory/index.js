import React from "react";
import PropTypes from "prop-types";
import "./ExpenseHistory.css";
import {withDataContext} from '../../context';

class ExpenseHistory extends React.Component {
    static propTypes = {
        addedExpenses: PropTypes.arr,
        email: PropTypes.string,
        destination: PropTypes.string,
        category: PropTypes.string,
    }

    render() {
        let data = this.props.value;
        var json = data[this.props.email].destinations[this.props.destination].expenses[this.props.category];
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
        });
        return (
            <table className="Expenses">
                <tr>
                    <th>Name</th>
                    <th>Cost</th>
                </tr>
                    {
                        arr.map(item => (
                            <tr key={item.id}>
                                <th>{item.name}</th>
                                <th>{item.price}
                                    <button>&times;</button>
                                </th>
                            </tr>
                        ))
                    }
                    {this.props.addedExpenses}
            </table>
        );
    }
}


export default withDataContext(ExpenseHistory);