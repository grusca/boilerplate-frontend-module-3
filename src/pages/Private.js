import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";


class Private extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <div>
        <h1>Welcome {user.username}</h1>
        <button className='button' onClick={logout}> Logout </button>
      </div>
    );
  }
}

export default withAuth(Private);
