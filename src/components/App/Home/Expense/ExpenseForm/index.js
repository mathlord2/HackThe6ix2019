import React from "react";
import PropTypes from "prop-types";
import "./ExpenseForm.css";
import {withFirebase} from '../../../../../Firebase';

const INITIAL_STATE = {
    name: '',
    price: '',
    error: null,
};

class ExpenseForm extends React.Component {
    static propTypes = {
        submitHandler: PropTypes.func,
        destination: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = event => {
        const { name, price } = this.state;
        console.log(name);
        console.log(price);
        this.props.submitHandler(name,price);
        //$.ajax('localhost' + "/submit-expense", {
        //    headers: {
        //        'Authorization': 'Bearer ',
        //        'Access-Control-Allow-Origin': '*'
        //    },
        //    method: 'POST',
        //    data: JSON.stringify({'token': this.props.firebase.auth().getToken(), 'destination': this.props.destination, 'name' : name, 'price' : Number(price)}),
        //    contentType : 'application/json',
        //}).then(function(data){
        //    this.setState({ ...INITIAL_STATE });
        //}).catch(error =>{
        //    this.setState({ error });
        //})
        //event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { name, price, error } = this.state;
        const isInvalid = name === '' || isNaN(price) || price=="";

        return (
            <form onSubmit={this.onSubmit}>
                <input  
                    type="text" 
                    name="name"
                    value={name}
                    onChange={this.onChange}
                    placeholder="Name"
                />
                <input  
                    type="text" 
                    name="price"   
                    value={price}
                    onChange={this.onChange}
                    placeholder="Price"
                />
                <button disabled={isInvalid} type="submit"><div>Add</div></button>
                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(ExpenseForm);