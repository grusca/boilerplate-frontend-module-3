import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import ClientList from "../components/clients/ClientList";



class Client extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="client">
        <div className="fixedTitle">
        <h1>Welcome {user.username}</h1>
        <h2>Your Clients</h2>
        </div>

        <input type="search" name="search" placeholder="Search client"/>
        
        <ClientList/>

      </div>
    );
  }
}

export default withAuth(Client);
