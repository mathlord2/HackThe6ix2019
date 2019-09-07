import React from "react";
import "./SideBar.css";
import {withDataContext} from '../context';
import PropTypes from 'prop-types';
import {Button} from './Button'; 
import Form from './Form';
import ErrorBoundary from '../../../../testing/ErrorBoundary';

class SideBar extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
        value: PropTypes.object,
    }

    componentDidMount() {
        window.addEventListener("click", this.closeForm);
    }

    componentWillUnmount() {
        window.removeEventListener("click", this.closeForm);
    }

    constructor(props) {
        super(props);

        this.state = {
            addedDestinations: [],
            formToggle: ''
        }
    }

    handleClick = destination => {
        this.props.clickHandler(destination);
    }

    addDestination = destination => {
        this.setState({
            addedDestinations : this.state.addedDestinations.concat([destination])
        });
    }

    openForm = () => {
        this.setState({formToggle: '_open'});
    }

    closeForm = e => {
        if (e.target.id != 'addDestinationForm');
        this.setState({formToggle: ''});
    }

    render() {
        let data = this.props.value;
        var json = data.destinations;
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(key);
        });
        return (
            <div>
                <a>Vacations</a>
                <div>
                {
                    arr.map((item, index) => (
                        <li key={index}>
                            <Button clickHandler={this.handleClick} item={item}></Button>
                        </li>
                    ))
                }
                </div>
                <div>
                {
                    this.state.addedDestinations.map((item, index) => (
                        <li key={index}>
                            <Button clickHandler={this.handleClick} item={item}></Button>
                        </li>
                    ))
                }
                </div>
                <ErrorBoundary>
                <li><div id={"addDestinationForm" + this.state.formToggle}><Form destinationHandler={this.addDestination}/></div></li>
                <li><button onClick={this.openForm}>+ Add Vacation</button></li>
                </ErrorBoundary>
            </div>
        );
    }
}

export default withDataContext(SideBar);