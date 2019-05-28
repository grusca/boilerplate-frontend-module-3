import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import ClientList from "../components/clients/ClientList";



class Client extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="pageTitle">
        <h1> {user.username}</h1>
        </div>

        <h2>Your Clients</h2>
        
        <ClientList/>

      </div>
    );
  }
}

export default withAuth(Client);
