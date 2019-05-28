// components/clients/AddClient.js
import React, { Component } from 'react';
import clientService from '../../lib/client-service';

class EditClient extends Component {
  constructor(props){
    super(props);
    this.state = {
        firstname: this.props.theClient.firstname, 
        lastname: this.props.theClient.lastname
    }
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname } = this.state;
    const { _id } = this.props.theClient;
    // Edit Client
    clientService.editClient(_id, firstname, lastname)
    .then( () => {
      this.props.getTheClient();	
      this.props.history.push('/clients'); 
    })
     .catch( err => console.log(err) )
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
    //                 ▲   Assign value to property using "object bracket notataion"
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="firstname" placeholder="First name" value={this.state.firstname} onChange={this.handleChange}/>
          <input type="text" name="lastname" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default EditClient;