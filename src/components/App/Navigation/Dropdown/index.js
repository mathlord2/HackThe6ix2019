import React from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'

class DropDown extends React.Component {
    static propTypes = {
        content: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            open: "",
        }
    }

    toggle = () => {    
        if(this.state.open == "") {
            this.setState({open: "_open"});
        } else {
            this.setState({open: ""});
        }
    }

    render() {
        return(
            <div>
                <div>
                    <p>{this.props.content}</p>
                    <button onClick={this.toggle}>click</button>
                </div>
                <div className={"dropdown-content" + this.state.open}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default DropDown;