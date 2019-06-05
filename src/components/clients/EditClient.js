// components/clients/AddClient.js
import React, { Component } from 'react';
import clientService from '../../lib/client-service';

class EditClient extends Component {
  constructor(props){
    super(props);
    this.state = {
      firstname: this.props.theClient.firstname, 
      lastname: this.props.theClient.lastname,
      phonenumber: this.props.theClient.phonenumber,
      email: this.props.theClient.email,
      isShowing: false
    }
  }
    
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, phonenumber, email } = this.state;
    const { _id } = this.props.theClient;
    // Edit Client
    clientService.editClient(_id, firstname, lastname, phonenumber, email)
    .then( () => {
      this.props.getTheClient();	
      this.props.history.push('/clients'); 
    })
     .catch( err => console.log(err) )
  }

  toggleForm = () => this.setState({isShowing: !this.state.isShowing});

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
    //                 ▲   Assign value to property using "object bracket notataion"
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors
  }

  deleteClient = () => {
    const { id } = this.props.match.params;
    clientService.removeClient(id)
      .then( () => this.props.history.push('/clients') )
    	.catch( err => console.log(err));
  }

  render(){
    return (
      <div>

      <button className="buttonMini" onClick={this.toggleForm}>  Edit Client </button>

{
      !this.state.isShowing ?
      null
      :
      (<div>

        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="firstname" placeholder="First name" value={this.state.firstname} onChange={this.handleChange}/>
          <input type="text" name="lastname" placeholder="Last name" value={this.state.lastname} onChange={this.handleChange} />
          <input type="text" name="phonenumber" placeholder="Phone number" value={this.state.phonenumber} onChange={this.handleChange} />
          <input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
          <button className="button" onClick={() => this.deleteClient()}> Delete client </button>
        </form>
        </div>)
      }
      </div>
    )
  }
}

export default EditClient;