// components/clients/AddClient.js
import React, { Component } from 'react';
import axios from 'axios';

class AddClient extends Component {
  constructor(props){
    super(props);
    this.state = { firstname: "", lastname: "" };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    const {firstname, lastname } = this.state;
    
    axios.post("http://localhost:5000/api/clients", { firstname, lastname })
      .then( () => {
        console.log(firstname)
        console.log(this.props.currentUser)
        this.props.getData();
        this.setState({firstname: "", lastname: ""});
      })
      .catch( err => console.log(err) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState( {[name]: value} );
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Enter Client Information</label>
          <input type="text" name="firstname" placeholder="First name" value={this.state.firstname} onChange={ (e) => this.handleChange(e) }/>
          <input type="text" name="lastname" placeholder="Last name" value={this.state.lastname} onChange={ (e) => this.handleChange(e) }/>
          <input type="submit" className="button" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddClient;