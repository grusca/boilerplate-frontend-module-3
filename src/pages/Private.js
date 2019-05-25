import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import ClientDetails from '../components/clients/ClientDetails';


class Private extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        <h1>Welcome {user.username}</h1>
        <ClientDetails/>
        <button className='button' onClick={logout}> Logout </button>
      </div>
    );
  }
}

export default withAuth(Private);
