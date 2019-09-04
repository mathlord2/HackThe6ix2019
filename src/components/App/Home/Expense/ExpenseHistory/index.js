import React from "react";
import PropTypes from "prop-types";
import "./ExpenseHistory.css";
import {withDataContext} from '../../context';

class ExpenseHistory extends React.Component {
    static propTypes = {
        destination: PropTypes.string,
        category: PropTypes.string,
    }

    render() {
        let data = this.props.value;
        var json = data.destinations[this.props.destination].expenses[this.props.category];
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(json[key]);
        });
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
                        arr.map((item, index) => (
                            <tr key={index}>
                                <th>{item.name}</th>
                                <th>{item.price}
                                    <button>&times;</button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        );
    }
}


export default withDataContext(ExpenseHistory);