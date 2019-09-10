import React from "react";
import PropTypes from 'prop-types';
import ErrorBoundary from '../../../../../testing/ErrorBoundary';

const INITIAL_STATE = {
    destination: '',
    formVisible: false,
};

class Form extends React.Component {
    static propTypes = {
        destinationHandler: PropTypes.func,
        close: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {...this.INITIAL_STATE};
    }
    
    handleClick = () => {
        if (!this.state.formVisible) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            popupVisible: !prevState.formVisible,
        }));

    }

    handleOutsideClick = e => {
        if (this.node.contains(e.target)) {
            return;
        }
        this.handleClick();
    }

    submitForm = event => {
        this.props.destinationHandler(this.state.destination);
        this.props.close();
        event.preventDefault();
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