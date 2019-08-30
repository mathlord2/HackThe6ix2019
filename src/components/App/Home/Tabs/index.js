import React from "react";
import "./Tabs.css";

class Tabs extends React.Component {
    render() {
        return (
            <div>
                <button>General</button>
                <button>Accommodations</button>
                <button>Tickets</button>
                <button>Travel</button>
                <button>Food</button>
            </div>
        );
    }
}

export default Tabs;