import React from "react";
import PropTypes from 'prop-types';

class Button extends React.Component {
    static propTypes = {
        item: PropTypes.string,
        clickHandler: PropTypes.func,
    }

    handleClick = () => {
        this.props.clickHandler(this.props.item);
    }

    render() {
        return (
            <button onClick={this.handleClick}>{this.props.item}</button>
        );
    }
}

class AddButton extends React.Component {
    static propTypes = {
        item: PropTypes.string,
        clickHandler: PropTypes.func,
    }

    handleClick = () => {
        this.props.clickHandler(this.props.item);
    }

    render() {
        return(
            <button onClick={this.handleClick}>+ Add Vacation</button>
        );
    }
}

export {Button, AddButton};