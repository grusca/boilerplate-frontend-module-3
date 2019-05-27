import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import Navbar from "../components/Navbar";


class Private extends Component {
  render() {
    const { user, logout } = this.props;
    return (
      <div>
        <Navbar/>
        <h2>Welcome {user.username}</h2>
        <Link className="home button" to={"/usersettings"}> Settings </Link> 
        <form>
        <Link className="home button" to={"/clients"}> Clients </Link> 
        <Link className="home button" to={"/clients/:id/jobs/:jobId"}> Current Jobs </Link> 
        <Link className="home button" to={"/trackstatus"}> Track status </Link> 
        </form>
      </div>
    );
  }
}

export default withAuth(Private);
