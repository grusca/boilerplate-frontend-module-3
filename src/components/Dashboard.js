import React, { Component } from 'react'
import axios from 'axios';

export class Dashboard extends Component {

    state={
        listOfClients: []
    }

    getAllClients = () => {
        axios.get('http://localhost:5000/clients')
        .then((apiResponse) => {
            this.setState({ listOfClients: apiResponse.data })
          })
        .catch(err => console.log(err));
     }

    
    componentDidMount () {
        this.getAllClients();
    }

    
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Dashboard
