import React from "react";
import "./SideBar.css";
import {withDataContext} from '../context';
import PropTypes from 'prop-types';
import {Button, AddButton} from './Button'; 

class SideBar extends React.Component {
    static propTypes = {
        email: PropTypes.string,
        clickHandler: PropTypes.func,
        value: PropTypes.object,
    }

    constructor(props) {
        super(props);

        this.displayElements = []

        this.state = {
            addedDestinations: [],
        }
    }

    handleClick = destination => {
        this.props.clickHandler(destination);
    }

    addDestination = destination => {
        this.displayElements.push(<li><Button clickHandler={this.handleClick} item={destination}></Button></li>);
        this.setState({
            displayElements : this.displayData,
        });
    }

    render() {
        let data = this.props.value;
        var json = data[this.props.email].destinations;
        var arr = [];
        Object.keys(json).forEach(function(key) {
            arr.push(key);
        });
        return (
            <div>
                <ul>
                    <li>
                        <a>Vacations</a>
                        <ul>
                            {
                                arr.map(item => (
                                    <li><Button clickHandler={this.handleClick} item={item}></Button></li>
                                ))
                            }
                            {this.displayElements}
                            <li><AddButton clickHandler={this.addDestination}></AddButton></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default withDataContext(SideBar);