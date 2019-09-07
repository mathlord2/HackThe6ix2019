import React from "react";
import PropTypes from 'prop-types';
import ErrorBoundary from '../../../../../testing/ErrorBoundary';

const INITIAL_STATE = {
    destination: '',
};

class Form extends React.Component {
    static propTypes = {
        destinationHandler: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {...this.INITIAL_STATE};
    }
    
    submitForm = event => {
        console.log(this.state.destination);
        this.props.destinationHandler(this.state.destination);
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const isInvalid = this.state.destination === '' 
        return(
            <ErrorBoundary>
            <form onSubmit={this.submitForm}>
                <input 
                id="addDestination"
                name="destination"
                value={this.state.destination}
                onChange={this.onChange}
                type="text"
                placeholder="Destination Name"    
                />
                <button disabled={isInvalid} type="submit">Submit</button>
            </form>
            </ErrorBoundary>
        );
    }
}

export default Form;