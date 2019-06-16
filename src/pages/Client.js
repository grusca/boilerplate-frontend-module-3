import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import ClientList from "../components/clients/ClientList";
import Navbar from '../components/Navbar';


class Client extends Component {
  render() {
    const { user } = this.props;
    return (
      <div className="clientPage">
        <div className="pageTitle">
          <h1> {user.username} </h1>
          <h2>Your Clients</h2>
        </div>
        <ClientList user={user}/>
        <Navbar/>
      </div>
    );
  }
}

export default withAuth(Client);
