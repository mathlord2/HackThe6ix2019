import React from 'react';
import PropTypes from 'prop-types';

import ExpenseForm from './ExpenseForm';
import ExpenseHistory from './ExpenseHistory';

import ErrorBoundary from '../../../../../testing/ErrorBoundary'

class Expense extends React.Component {

    static propTypes = {
        email: PropTypes.string,
        category: PropTypes.string,
        destination: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.addedExpenses = [];
    } 

    handleSubmit = (name,price) => {
        this.addedExpenses.push(
            <tr>
                <th>{name}</th>
                <th>{price}
                    <button>&times;</button>
                </th>
            </tr>
        );
    }

    render () {
        return (
            <div>
                <ErrorBoundary>
                    <ExpenseHistory addedExpenses={this.addedExpenses} email={this.props.email} destination={this.props.destination} category={this.props.category}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ExpenseForm submitHandler={this.handleSubmit} email={this.props.email} destination={this.props.destination} />
                </ErrorBoundary>
            </div>
        );
    }
}



export default Expense;