import React from 'react';
import PropTypes from 'prop-types';

class DropDown extends React.Component {
    static propTypes = {
        content: PropTypes.string,
    }

    toggle = () => {

    }

    render() {
        return(
            <div className="dropdown-content">
                {this.props.children}
            </div>
        );
    }
}

export default DropDown;