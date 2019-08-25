import React from "react";
import PropTypes from "prop-types";
import "../css/ExpensePanel.css";

class ExpensePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expenses: [['yes',1,3], ['no', 4, 6]]
        }
    }

    openSideBar() {
        $('#sidebar').css({ 'width': '300px' });
        $('#header i').css({ 'right': '310px' });
    }

    handleClick = buttonName => {
        //let index = this.state.expenses.indexOf();
        
        //this.setState(expenses.filter());
    };

    static propTypes = {
        startCurrency: PropTypes.string, 
        endCurrency: PropTypes.string, 
    }

    render() {
        return (
            <div>
                <i className="fa fa-bars" onClick={this.openSideBar}></i>
                <center>
                    <table className="Expenses">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>{'Cost' + '(' + this.props.startCurrency + ')'}</th>
                                <th>{'Cost' + '(' + this.props.endCurrency + ')'}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.expenses.map(item => (
                                <tr>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <th><button onClick={this.handleClick}>&times;</button></th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </center>
            </div>
        );
    }
}

export default ExpensePanel;