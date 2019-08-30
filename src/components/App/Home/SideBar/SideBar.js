import React from "react";
import "./SideBar.css";

class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            places: 
        }
    }

    closeSideBar() {
        $('#sidebar').css({ 'width': '0px' });
    }

    render() {
        return (
            <div>
                <ul>
                    <li>
                        <ul><a>Vacations</a>
                            <li><button>+ Add Vacation</button></li>
                        </ul>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SideBar;