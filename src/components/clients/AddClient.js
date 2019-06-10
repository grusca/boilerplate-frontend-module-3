// components/clients/AddClient.js
import React, { Component } from 'react';
import clientService from '../../lib/client-service';

class AddClient extends Component {
  constructor(props){
    super(props);
    this.state = { 
      firstname: "",
      lastname: "",
      phonenumber: "",
      email: "",
      isShowing: false 
    }
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstname, lastname, phonenumber, email } = this.state;
    const userID = this.props.user._id;
    // Add Client
    clientService.addClient(firstname, lastname, phonenumber, email, userID)
    .then( () => {
      this.props.getData();
      this.setState({firstname: "", lastname: "", phonenumber: "", email: "", isShowing: false });
    })
    .catch( err => console.log(err) )
  }

  toggleForm = () => this.setState({isShowing: !this.state.isShowing});

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState( {[name]: value} );
  }

  render(){
    return(
      <div>

      <button className="buttonMini" onClick={this.toggleForm}> Add Client </button>

{
  !this.state.isShowing ?
   null
  :
  (<div>
        <form>
          <label>Enter Client Information</label>
          <input className="input" type="text" name="firstname" placeholder="First name" value={this.state.firstname} onChange={ (e) => this.handleChange(e) } />
          <input className="input" type="text" name="lastname" placeholder="Last name" value={this.state.lastname} onChange={ (e) => this.handleChange(e) }/>
          <input className="input" type="text" name="phonenumber" placeholder="Phone number" value={this.state.phonenumber} onChange={ (e) => this.handleChange(e) }/>
          <input className="input" type="email" name="email" placeholder="Email" value={this.state.email} onChange={ (e) => this.handleChange(e) }/>
          <input className="button" type="submit"  value="Submit" onClick={this.handleFormSubmit}/>
        </form>
        </div>)
        }
      </div>
    )
  }
}

export default AddClient;