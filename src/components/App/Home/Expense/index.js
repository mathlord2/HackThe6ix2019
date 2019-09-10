import React from 'react';
import PropTypes from 'prop-types';

import ExpenseForm from './ExpenseForm';
import ExpenseHistory from './ExpenseHistory';

import ErrorBoundary from '../../../../testing/ErrorBoundary'

class Expense extends React.Component {
    static propTypes = {
        category: PropTypes.string,
        destination: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            addedExpenses: [],
        }
    } 

    handleSubmit = (name,price) => {
        this.setState({addedExpenses: this.state.addedExpenses.concat({name: name, price: price})})
    }

    handleRemove = expense => {
        this.setState({addedExpenses: this.state.addedExpenses.filter(arrayItem => arrayItem !== expense)});
    }

    render() {
        return (
            <div>
                <ErrorBoundary>
                    <ExpenseHistory removeHandler={this.handleRemove} destination={this.props.destination} category={this.props.category} addedExpenses={this.state.addedExpenses}/>
                </ErrorBoundary>
                <ErrorBoundary>
                    <ExpenseForm submitHandler={this.handleSubmit} destination={this.props.destination} />
                </ErrorBoundary>
            </div>
        );
    }
}



export default Expense;