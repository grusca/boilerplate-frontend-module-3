import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import ClientList from "../components/clients/ClientList";
import { Link } from "react-router-dom";



class Client extends Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <div className="pageTitle">
        <h1> {user.username}</h1>
        <h2>Your Clients</h2>
        </div>
        <ClientList/>
        <Link to={'/private'}> <button className="button">Back</button> </Link>
      </div>
    );
  }
}

export default withAuth(Client);
