// components/clients/ClientList.js
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import clientService from '../../lib/client-service';
import AddClient from './AddClient'; 

class ClientList extends Component {
	state = { 
    listOfClients: [] 
  };

  getAllClients = () => {
    // Get All Clients
    clientService.getClients()
    .then((apiResponse) => {
      this.setState({ listOfClients: apiResponse.data })
    })
    .catch( err => console.log(err) )
  }

  componentDidMount() {
    this.getAllClients();  
  }

  render() {
    const { listOfClients } = this.state;

    return(
      <div>         {/* After adding a clients,we will GET all clients again from API  */}
        <AddClient getData={this.getAllClients} />   
        <div className="client">
          { 
            listOfClients.map( (client) => {
            return (
              
              <div key={client._id} className='clientCard'>
                <Link to={`/clients/${client._id}`}>
                  <h3>{client.firstname} {client.lastname} </h3>
                  <p></p>
                </Link>
              </div>
            )})
          }
        </div>

      </div>
    )
  }
}

export default ClientList;