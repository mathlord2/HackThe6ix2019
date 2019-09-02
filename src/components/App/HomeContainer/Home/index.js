import React from 'react';
import { withAuthentication, withAuthorization } from '../../../../Session';
import {DataContext} from './context';

import Tabs from './Tabs';
import SideBar from './SideBar';

import Expense from './Expense';
import PropTypes from 'prop-types';

import ErrorBoundary from '../../../../testing/ErrorBoundary';

class HomePage extends React.Component {
  static propTypes = {
    email: PropTypes.string
  }

  constructor(props) {
    super(props);
    /*$.ajax(localhost + "/read-trip", {
      headers: {
        'Authorization': 'Bearer ',
        'Access-Control-Allow-Origin': '*'
      },
      method: 'POST',
      data: JSON.stringify({'email': this.props.email}),
      contentType : 'application/json'
    }).then(function(data){
      this.state = {
        data: $.parseJSON(data),
      }
    });*/

    //test data
    const response = {
      "kevigao2003@gmail.com": {
        "destinations": {
          "Toronto": {
            "expenses" : {
              "Accommodations": {
                "a1": { 
                  "name": "yes",
                  "price": 31
                },
                "a2": {
                  "name": "yo bor",
                  "price": 2321
                }
              },
              "General": {
                "g1": {
                  "name": "maybe",
                  "price": 323
                }
              },
              "Tickets": {
                "t1": {
                  "name": "yo bro",
                  "price": 23
                }
              },
              "Travel": {
                "t1": {
                  "name": "boi",
                  "price": 67
                }
              },
              "Food": {
                "f1": {
                  "name": "no",
                  "price": 154
                }
              },
            }
          },
          "India": {
            "expenses" : {
              "Accommodations": {
                "a1": { 
                  "name": "yes",
                  "price": 31
                },
                "a2": {
                  "name": "yo bor",
                  "price": 2321
                }
              },
              "General": {
                "g1": {
                  "name": "different",
                  "price": 323
                }
              },
              "Tickets": {
                "t1": {
                  "name": "yo bro",
                  "price": 23
                }
              },
              "Travel": {
                "t1": {
                  "name": "boi",
                  "price": 67
                }
              },
              "Food": {
                "f1": {
                  "name": "no",
                  "price": 154
                }
              },
            }
          }
        }
      }
    }

    this.state = {
      data : response, 
      destination: response[this.props.email].destinations ? Object.keys(response[this.props.email].destinations)[0] : null,
    }
  }

  changeDestination = destination => {
    this.setState({destination: destination});
  }

  render() {
    return( 
      <ErrorBoundary>
      <DataContext.Provider value={this.state.data}>
        <div>
          <SideBar email={this.props.email} clickHandler={this.changeDestination}></SideBar>
          <Tabs>
            <div label="General">
              <Expense email={this.props.email} destination={this.state.destination} category="General"></Expense>
            </div>
            <div label="Accommodations">
              <Expense email={this.props.email} destination={this.state.destination} category="Accommodations"></Expense>
            </div>
            <div label="Tickets">
              <Expense email={this.props.email} destination={this.state.destination} category="Tickets"></Expense>
            </div>
            <div label="Travel">
              <Expense email={this.props.email} destination={this.state.destination} category="Travel"></Expense>
            </div>
            <div label="Food">
              <Expense email={this.props.email} destination={this.state.destination} category="Food"></Expense>
            </div>
          </Tabs>
        </div>
      </DataContext.Provider>
      </ErrorBoundary>
    );
  }
}

const condition = authUser => !!authUser;

export default withAuthentication(withAuthorization(condition)(HomePage));