import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import ClientList from "../components/clients/ClientList";



class Client extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="client">
        <h1>Welcome {user.username}</h1>
        <h2>Your Clients</h2>

        <input type="search" name="search" placeholder="Search client"/>
        
        <ClientList/>

      </div>
    );
  }
}

export default withAuth(Client);
