import React from "react";
import "./SideBar.css";
import {withDataContext} from '../context';
import PropTypes from 'prop-types';
import {Button} from './Button'; 
import ErrorBoundary from '../../../../testing/ErrorBoundary';
import Form from './Form'

class SideBar extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
        value: PropTypes.object,
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

    closeForm = () => {
        this.setState({formToggle: ''});
    }

    setWrapperRef = node => {
        this.wrapperRef = node;
    }

    handleClickOutside = event => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
           this.closeForm();
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
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
                <div ref={this.setWrapperRef} className={"addDestinationForm" + this.state.formToggle}>
                    <Form destinationHandler={this.addDestination} close={this.closeForm}></Form>
                </div>
                <button onClick={this.openForm}>+ Add Vacation</button>
                </ErrorBoundary>
            </div>
        );
    }
}

export default withDataContext(SideBar);