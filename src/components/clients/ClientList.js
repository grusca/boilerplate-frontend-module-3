// components/clients/ClientList.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clientService from '../../lib/client-service';
import AddClient from './AddClient'; 

class ClientList extends Component {
  
  state = { 
    listOfClients: [],
    user: this.props.user
  };

  
  getAllClients = () => {
    const userId = this.state.user._id
    clientService.getClients(userId)
    .then( apiResponse => this.setState({ listOfClients: apiResponse.data }))
    .catch( err => console.log(err) )
  }

  componentDidMount() {
    this.getAllClients();  
  }

  render() {
    const { listOfClients } = this.state;

    return(
      <div>         {/* After adding a clients,we will GET all clients again from API  */}
        <AddClient getData={this.getAllClients} user={this.props.user}/>   
        <div className="client">
          { 
            listOfClients.map( (client) => {
            return (
              
              <Link key={client._id} className='clientCard' to={`/clients/${client._id}`}>
                <div>
                  <h3 className="clientName"> {client.firstname} {client.lastname} </h3>
                  <p className="phonenumber">{client.phonenumber}</p>
                </div>
              </Link>
            )})
          }
        </div>

      </div>
    )
  }
}

export default ClientList;