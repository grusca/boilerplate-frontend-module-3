// components/clients/ClientList.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import AddClient from './AddClient'; // <== !!!

class ClientList extends Component {
	state = { 
    listOfClients: [] 
  };

  getAllClients = () => {
    axios.get(`http://localhost:5000/api/clients`)
    .then((apiResponse) => {
      this.setState({ listOfClients: apiResponse.data })
    })
  }

  componentDidMount() {
    this.getAllClients();  
  }

  render() {
    const { listOfClients } = this.state;

    return(
      <div>         {/* After adding a clients,we will GET all clients again from API  */}
        <AddClient getData={this.getAllClients} />   
        <div>
          { 
            listOfClients.map( (client) => {
            return (
              <div key={client._id} className='client'>
                <Link to={`/clients/${client._id}`}>
                  <h3>{client.title}</h3>
                  <p>{client.description} </p>
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